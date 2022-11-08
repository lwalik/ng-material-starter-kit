import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/products-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { PublicHolidaysSelectComponent } from './components/public-holidays-select/public-holidays-select.component';
import { CategoriesCheckboxListComponent } from './components/categories-checkbox-list/categories-checkbox-list.component';
import { ProductListComponentModule } from './components/products-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysSelectComponentModule } from './components/public-holidays-select/public-holidays-select.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoriesListComponent },
      { path: 'crypto', component: CryptoChipsListComponent },
      { path: 'public-holidays', component: PublicHolidaysSelectComponent },
      { path: 'checkbox-categories', component: CategoriesCheckboxListComponent }
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    CategoriesListComponentModule,
    CategoriesServiceModule,
    CryptoChipsListComponentModule,
    CryptoServiceModule,
    PublicHolidaysSelectComponentModule,
    PublicHolidaysServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
