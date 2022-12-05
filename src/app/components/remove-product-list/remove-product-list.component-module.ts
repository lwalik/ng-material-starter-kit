import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RemoveProductListComponent } from './remove-product-list.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [RemoveProductListComponent],
  providers: [],
  exports: [RemoveProductListComponent],
})
export class RemoveProductListComponentModule {}
