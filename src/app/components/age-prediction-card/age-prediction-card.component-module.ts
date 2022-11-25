import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AgePredictionCardComponent } from './age-prediction-card.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [AgePredictionCardComponent],
  providers: [],
  exports: [AgePredictionCardComponent]
})
export class AgePredictionCardComponentModule {
}
