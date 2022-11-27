import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-advanced-employees-list',
  templateUrl: './advanced-employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedEmployeesListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  public orders$: Observable<string[]> = of(['asc', 'desc']);
  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeesService.getAll(),
    this.order$
  ]).pipe(
    map(([employees, order]: [EmployeeModel[], string]) => employees.sort((a, b) => {
      if (a.salary > b.salary) return order === 'asc' ? 1 : -1;
      if (a.salary < b.salary) return order === 'asc' ? -1 : 1;
      return 0;
    }))
  )

  constructor(private _employeesService: EmployeesService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
