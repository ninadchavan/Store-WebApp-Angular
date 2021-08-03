import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-pproduct/AddProduct.component';
import { AddProductGuard } from './add-pproduct/AddProduct.guard';
import { EditProductComponent } from './edit-product/EditProduct.component';
import { EditProductGuard } from './edit-product/EditProduct.guard';
import { HomeComponent } from './home/Home.component';
import { ProductDetailsComponent } from './product-details/ProductDetails.component';
import { ProductListComponent } from './product-list/ProductList.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'products', component: ProductListComponent, pathMatch: 'full'},
  {path: 'products/:id', component: ProductDetailsComponent, pathMatch: 'full'},
  {path: 'products/:id/edit', canDeactivate: [EditProductGuard], component: EditProductComponent, pathMatch: 'full'},
  {path: 'add-product', canDeactivate: [AddProductGuard], component: AddProductComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
