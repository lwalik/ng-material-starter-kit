import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-form',
  styleUrls: ['./employee-form.component.scss'],
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl(),
  });

  constructor(private _employeesService: EmployeesService) {}

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeesService
      .create({
        name: employeeForm.value.name,
        salary: employeeForm.value.salary,
        age: employeeForm.value.age,
        profileImage: ''
      })
      .subscribe();
  }
}
