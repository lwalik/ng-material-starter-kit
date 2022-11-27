import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filtered-list-of-products',
  templateUrl: './filtered-list-of-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteredListOfProductsComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.category$,
  ]).pipe(
    map(([products, category]: [ProductModel[], string]) =>
      products.filter((product) => product.category === category)
    )
  );

  constructor(
    private _categoriesService: CategoriesService,
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) { }

  selectCategory(category: string): void {
    this._categorySubject.next(category)
  }
}
