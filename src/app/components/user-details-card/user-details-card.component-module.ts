import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserDetailsCardComponent } from './user-details-card.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [UserDetailsCardComponent],
  providers: [],
  exports: [UserDetailsCardComponent]
})
export class UserDetailsCardComponentModule {
}
