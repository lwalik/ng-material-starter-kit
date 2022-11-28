import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { PublicHolidaysSelectComponent } from './components/public-holidays-select/public-holidays-select.component';
import { CategoriesCheckboxListComponent } from './components/categories-checkbox-list/categories-checkbox-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { CatFactsDetailsComponent } from './components/cat-facts-details/cat-facts-details.component';
import { AgePredictionCardComponent } from './components/age-prediction-card/age-prediction-card.component';
import { ProductDetailsCardComponent } from './components/product-details-card/product-details-card.component';
import { CartDetailsCardComponent } from './components/cart-details-card/cart-details-card.component';
import { UserDetailsCardComponent } from './components/user-details-card/user-details-card.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { FilteredListOfProductsComponent } from './components/filtered-list-of-products/filtered-list-of-products.component';
import { SortedListOfProductsComponent } from './components/sorted-list-of-products/sorted-list-of-products.component';
import { AdvancedEmployeesListComponent } from './components/advanced-employees-list/advanced-employees-list.component';
import { BeersListWithPaginationComponent } from './components/beers-list-with-pagination/beers-list-with-pagination.component';
import { ProductListComponentModule } from './components/products-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysSelectComponentModule } from './components/public-holidays-select/public-holidays-select.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoriesCheckboxListComponentModule } from './components/categories-checkbox-list/categories-checkbox-list.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { ProductsTableComponentModule } from './components/products-table/products-table.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { RegisterComponentModule } from './components/register/register.component-module';
import { CatFactsDetailsComponentModule } from './components/cat-facts-details/cat-facts-details.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';
import { AgePredictionCardComponentModule } from './components/age-prediction-card/age-prediction-card.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { ProductDetailsCardComponentModule } from './components/product-details-card/product-details-card.component-module';
import { ProductDetailsServiceModule } from './services/product-details.service-module';
import { CartDetailsCardComponentModule } from './components/cart-details-card/cart-details-card.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserDetailsCardComponentModule } from './components/user-details-card/user-details-card.component-module';
import { ActivityCardComponentModule } from './components/activity-card/activity-card.component-module';
import { ActivityServiceModule } from './services/activity.service-module';
import { FilteredListOfProductsComponentModule } from './components/filtered-list-of-products/filtered-list-of-products.component-module';
import { SortedListOfProductsComponentModule } from './components/sorted-list-of-products/sorted-list-of-products.component-module';
import { AdvancedEmployeesListComponentModule } from './components/advanced-employees-list/advanced-employees-list.component-module';
import { BeersListWithPaginationComponentModule } from './components/beers-list-with-pagination/beers-list-with-pagination.component-module';
import { BeersServiceModule } from './services/beers.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'categories', component: CategoriesListComponent },
      { path: 'crypto', component: CryptoChipsListComponent },
      { path: 'public-holidays', component: PublicHolidaysSelectComponent },
      { path: 'checkbox-categories', component: CategoriesCheckboxListComponent },
      { path: 'categories-menu', component: CategoriesMenuComponent },
      { path: 'product-search', component: ProductsTableComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'cat-facts', component: CatFactsDetailsComponent },
      { path: 'age/:name', component: AgePredictionCardComponent },
      { path: 'product/:id', component: ProductDetailsCardComponent },
      { path: 'cart/:id', component: CartDetailsCardComponent },
      { path: 'user/:id', component: UserDetailsCardComponent },
      { path: 'activity', component: ActivityCardComponent },
      { path: 'products', component: FilteredListOfProductsComponent },
      { path: 'sorted-products', component: SortedListOfProductsComponent },
      { path: 'employees', component: AdvancedEmployeesListComponent },
      { path: 'beers', component: BeersListWithPaginationComponent }
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    CategoriesListComponentModule,
    CategoriesServiceModule,
    CryptoChipsListComponentModule,
    CryptoServiceModule,
    PublicHolidaysSelectComponentModule,
    PublicHolidaysServiceModule,
    CategoriesCheckboxListComponentModule,
    CategoriesMenuComponentModule,
    ProductsTableComponentModule,
    ProductFormComponentModule,
    EmployeeFormComponentModule,
    EmployeesServiceModule,
    LoginFormComponentModule,
    UsersServiceModule,
    RegisterComponentModule,
    CatFactsDetailsComponentModule,
    CatFactsServiceModule,
    AgePredictionCardComponentModule,
    AgePredictionServiceModule,
    ProductDetailsCardComponentModule,
    ProductDetailsServiceModule,
    CartDetailsCardComponentModule,
    CartServiceModule,
    UserDetailsCardComponentModule,
    ActivityCardComponentModule,
    ActivityServiceModule,
    FilteredListOfProductsComponentModule,
    SortedListOfProductsComponentModule,
    AdvancedEmployeesListComponentModule,
    BeersListWithPaginationComponentModule,
    BeersServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
