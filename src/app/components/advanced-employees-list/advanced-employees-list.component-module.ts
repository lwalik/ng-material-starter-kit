import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { AdvancedEmployeesListComponent } from './advanced-employees-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule],
  declarations: [AdvancedEmployeesListComponent],
  providers: [],
  exports: [AdvancedEmployeesListComponent]
})
export class AdvancedEmployeesListComponentModule {
}
