import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import {CartModel} from "../../models/cart.model";

@Component({
  selector: 'app-cart-details-card',
  templateUrl: './cart-details-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDetailsCardComponent {
  readonly cart$: Observable<CartModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._cartService.getOne(data['id']))
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cartService: CartService
  ) {}
}
