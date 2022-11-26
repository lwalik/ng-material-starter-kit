import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ActivityCardComponent } from './activity-card.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [ActivityCardComponent],
  providers: [],
  exports: [ActivityCardComponent]
})
export class ActivityCardComponentModule {
}
