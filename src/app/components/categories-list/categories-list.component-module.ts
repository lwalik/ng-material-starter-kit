import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CategoriesListComponent } from './categories-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
