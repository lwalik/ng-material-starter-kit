import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredListOfProductsComponent } from './filtered-list-of-products.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, RouterModule, FlexModule],
  declarations: [FilteredListOfProductsComponent],
  providers: [],
  exports: [FilteredListOfProductsComponent],
})
export class FilteredListOfProductsComponentModule { }
