import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProductComponent } from './edit-product/EditProduct.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/Header.component';
import { NavbarComponent } from './navbar/Navbar.component';
import { ProductDetailsComponent } from './product-details/ProductDetails.component';
import { ProductListComponent } from './product-list/ProductList.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
