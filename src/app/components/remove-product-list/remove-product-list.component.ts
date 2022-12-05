import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-remove-product-list',
  templateUrl: './remove-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemoveProductListComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedProductsList$: Observable<ProductModel[]> = this.refresh$.pipe(switchMap(() => this._productsService.getAll()))

  constructor(private _productsService: ProductsService) {
  }

  deleteProduct(id: number): void {
    this._productsService.delete(id).subscribe(() => this._refreshSubject.next());
  }
}
