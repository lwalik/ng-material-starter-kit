import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailsCardComponent } from './product-details-card.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [ProductDetailsCardComponent],
  providers: [],
  exports: [ProductDetailsCardComponent]
})
export class ProductDetailsCardComponentModule {
}
