import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  map,
  Observable,
  startWith,
} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-product-list',
  templateUrl: './search-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchProductListComponent {
  // private _searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
  //   ''
  // );
  // public search$: Observable<string> = this._searchSubject.asObservable();
  readonly searchForm: FormGroup = new FormGroup({
    title: new FormControl(''),
  });

  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.searchForm.valueChanges.pipe(
      startWith({ title: '' }),
      debounceTime(1000)
    ),
  ]).pipe(
    map(([products, search]) => {
      if (!search.title) {
        return [];
      }

      return products.filter((product) =>
        product.title.startsWith(search.title)
      );
    })
  );

  constructor(private _productsService: ProductsService) {}

  onSearchFormSubmitted(searchForm: FormGroup): void {
    // this._searchSubject.next(searchForm.value.title);
  }
}
