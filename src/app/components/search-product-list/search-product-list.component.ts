import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-product-list',
  templateUrl: './search-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchProductListComponent {
  private _searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  public search$: Observable<string> = this._searchSubject.asObservable();
  readonly searchForm: FormGroup = new FormGroup({
    title: new FormControl(''),
  });

  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.search$,
  ]).pipe(
    map(([products, search]) => {
      if (!search) {
        return [];
      }

      return products.filter((product) => product.title.startsWith(search));
    })
  );

  constructor(private _productsService: ProductsService) {}

  onSearchFormSubmitted(searchForm: FormGroup): void {
    this._searchSubject.next(searchForm.value.title);
  }
}
