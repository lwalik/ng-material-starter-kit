import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-remove-employee-list',
  templateUrl: './remove-employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemoveEmployeeListComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedEmployeesList$: Observable<EmployeeModel[]> = this.refresh$.pipe(switchMap(() => this._employeesService.getAll()));

  constructor(private _employeesService: EmployeesService) {
  }

  deleteEmployee(id: number): void {
    this._employeesService.delete(id).subscribe((data) => {
      console.log(data);
      return this._refreshSubject.next()
    });
  }
}
