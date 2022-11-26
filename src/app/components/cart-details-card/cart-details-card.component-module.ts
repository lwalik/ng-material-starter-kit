import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartDetailsCardComponent } from './cart-details-card.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CartDetailsCardComponent],
  providers: [],
  exports: [CartDetailsCardComponent]
})
export class CartDetailsCardComponentModule {
}
