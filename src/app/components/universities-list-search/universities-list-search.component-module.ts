import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { UniversitiesListSearchComponent } from './universities-list-search.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatListModule],
  declarations: [UniversitiesListSearchComponent],
  providers: [],
  exports: [UniversitiesListSearchComponent]
})
export class UniversitiesListSearchComponentModule {
}
