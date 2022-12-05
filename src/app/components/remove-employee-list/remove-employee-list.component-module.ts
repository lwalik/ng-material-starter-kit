import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RemoveEmployeeListComponent } from './remove-employee-list.component';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatListModule, CommonModule],
  declarations: [RemoveEmployeeListComponent],
  providers: [],
  exports: [RemoveEmployeeListComponent]
})
export class RemoveEmployeeListComponentModule {
}
