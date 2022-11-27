import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-advanced-employees-list',
  templateUrl: './advanced-employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedEmployeesListComponent {
  readonly employees$: Observable<EmployeeModel[]> = this._employeesService.getAll();

  constructor(private _employeesService: EmployeesService) {
  }
}
