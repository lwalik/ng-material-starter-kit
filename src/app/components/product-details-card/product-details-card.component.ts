import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductDetailsService } from '../../services/product-details.service';
import {ProductDetailsModel} from "../../models/product-details.model";

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsCardComponent {
  readonly productDetails$: Observable<ProductDetailsModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._productDetailsService.getOne(data['id']))
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productDetailsService: ProductDetailsService
  ) {}
}
