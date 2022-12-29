import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime, startWith, switchMap, of, map } from 'rxjs';
import { UniversityModel } from '../../models/university.model';
import { UniversitiesService } from '../../services/universities.service';

interface UniversitiesWithStatusCode {
  universities: UniversityModel[];
  statusCode: number;
}

@Component({
  selector: 'app-universities-list-search',
  templateUrl: './universities-list-search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniversitiesListSearchComponent {
  readonly searchForm: FormGroup = new FormGroup({
    country: new FormControl(''),
  });
  readonly list$: Observable<UniversitiesWithStatusCode> =
    this.searchForm.valueChanges
      .pipe(startWith({ country: '' }), debounceTime(1000))
      .pipe(
        switchMap((searchForm) =>
          searchForm.country
            ? this._universitiesService
                .getAllByCountry(searchForm.country)
                .pipe(
                  map((universities) =>
                    !!universities
                      ? { universities: universities, statusCode: 200 }
                      : { universities: [], statusCode: 404 }
                  )
                )
            : of({ universities: [], statusCode: 0 })
        )
      );

  constructor(private _universitiesService: UniversitiesService) {}

  onSearchFormSubmitted(searchForm: FormGroup): void {}
}
