import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/products-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductListComponentModule } from './components/products-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoriesListComponent },
      { path: 'crypto', component: CryptoChipsListComponent },
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    CategoriesListComponentModule,
    CategoriesServiceModule,
    CryptoChipsListComponentModule,
    CryptoServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
