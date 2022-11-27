import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, combineLatest, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-sorted-list-of-products',
  templateUrl: './sorted-list-of-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortedListOfProductsComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  public orders$: Observable<string[]> = of(['asc', 'desc']);
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.order$
  ]).pipe(
    map(([products, order]: [ProductModel[], string]) =>
      products.sort((a, b) => {
        if (a.price > b.price) return order === 'asc' ? 1 : -1;
        if (a.price < b.price) return order === 'asc' ? -1 : 1;
        return 0;
      }))
  )

  constructor(private _productsService: ProductsService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
