import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CatFactsDetailsComponent } from './cat-facts-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CatFactsDetailsComponent],
  providers: [],
  exports: [CatFactsDetailsComponent]
})
export class CatFactsDetailsComponentModule {
}
