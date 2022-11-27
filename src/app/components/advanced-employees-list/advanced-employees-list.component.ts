import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

interface AgeRange {
  minAge: string;
  maxAge: string;
}

@Component({
  selector: 'app-advanced-employees-list',
  templateUrl: './advanced-employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedEmployeesListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'asc'
  );
  public order$: Observable<string> = this._orderSubject.asObservable();
  public orders$: Observable<string[]> = of(['asc', 'desc']);

  private _ageRangeSubject: BehaviorSubject<AgeRange> =
    new BehaviorSubject<AgeRange>({
      minAge: '0',
      maxAge: '100',
    });
  public ageRange$: Observable<AgeRange> = this._ageRangeSubject.asObservable();
  public ageRanges$: Observable<string[]> = of([
    'All',
    '0-20',
    '21-30',
    '31-40',
    '41-50',
    '51-100',
  ]);

  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeesService.getAll(),
    this.order$,
    this.ageRange$,
  ]).pipe(
    map(([employees, order, ageRange]: [EmployeeModel[], string, AgeRange]) =>
      employees
        .filter(
          (employee) =>
            +employee.age >= +ageRange.minAge &&
            +employee.age <= +ageRange.maxAge
        )
        .sort((a, b) => {
          if (a.salary > b.salary) return order === 'asc' ? 1 : -1;
          if (a.salary < b.salary) return order === 'asc' ? -1 : 1;
          return 0;
        })
    )
  );

  constructor(private _employeesService: EmployeesService) {}

  sort(order: string): void {
    this._orderSubject.next(order);
  }

  selectAgeRange(ageRange: string): void {
    if (ageRange !== 'All') {
      const [minAge, maxAge] = ageRange.split('-');
      console.log('minAge: ', minAge, ' maxAge: ', maxAge);
      this._ageRangeSubject.next({ minAge: minAge, maxAge: maxAge });
    } else {
      this._ageRangeSubject.next({ minAge: '0', maxAge: '100' });
    }
  }
}
