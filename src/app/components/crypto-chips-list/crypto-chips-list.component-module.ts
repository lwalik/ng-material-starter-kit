import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CryptoChipsListComponent } from './crypto-chips-list.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule],
  declarations: [CryptoChipsListComponent],
  providers: [],
  exports: [CryptoChipsListComponent]
})
export class CryptoChipsListComponentModule {
}
