import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { BeersListWithPaginationComponent } from './beers-list-with-pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatPaginatorModule],
  declarations: [BeersListWithPaginationComponent],
  providers: [],
  exports: [BeersListWithPaginationComponent],
})
export class BeersListWithPaginationComponentModule {}
