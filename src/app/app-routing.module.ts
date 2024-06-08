import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  // {path:'', component: ProductListingComponent},
  {path:'shopping', component: ProductListingComponent},
  {path:'', redirectTo: '/shopping', pathMatch:'full'},
  {path:'cart', component: ShoppingCartComponent},
  {path:'user', component: UserFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
