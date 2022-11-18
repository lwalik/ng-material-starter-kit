import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {}

  create(employee: EmployeeModel): Observable<void> {
    return this._httpClient
      .post<EmployeeModel>(
        'https://dummy.restapiexample.com/api/v1/create',
        employee
      )
      .pipe(map(() => void 0));
  }
}
