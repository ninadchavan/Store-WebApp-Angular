import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/EditProduct.component';
import { HomeComponent } from './home/Home.component';
import { ProductDetailsComponent } from './product-details/ProductDetails.component';
import { ProductListComponent } from './product-list/ProductList.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'products', component: ProductListComponent, pathMatch: 'full'},
  {path: 'products/:id', component: ProductDetailsComponent, pathMatch: 'full'},
  {path: 'products/:id/edit', component: EditProductComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
