import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../models/employee.model';

interface EmployeeResponse {
  status: string;
  data: {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
  }[]
}

interface RemoveEmployeeResponse {
  status: string;
  message: string;
}

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) { }

  create(employee: EmployeeModel): Observable<void> {
    return this._httpClient
      .post<EmployeeModel>(
        'https://dummy.restapiexample.com/api/v1/create',
        employee
      )
      .pipe(map(() => void 0));
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeResponse>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: EmployeeResponse) => response.data.map((employee) => {
        return {
          name: employee.employee_name,
          salary: employee.employee_salary,
          age: employee.employee_age,
          profileImage: employee.profile_image
        }
      }))
    );
  }

  delete(id: number): Observable<RemoveEmployeeResponse> {
    return this._httpClient.delete<RemoveEmployeeResponse>(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
  }
}
