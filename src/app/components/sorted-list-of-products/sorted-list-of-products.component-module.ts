import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SortedListOfProductsComponent } from './sorted-list-of-products.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [SortedListOfProductsComponent],
  providers: [],
  exports: [SortedListOfProductsComponent]
})
export class SortedListOfProductsComponentModule {
}
