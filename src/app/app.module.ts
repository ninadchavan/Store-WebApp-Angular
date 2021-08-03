import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProductComponent } from './edit-product/EditProduct.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/Header.component';
import { HomeComponent } from './home/Home.component';
import { NavbarComponent } from './navbar/Navbar.component';
import { ProductDetailsComponent } from './product-details/ProductDetails.component';
import { ProductListComponent } from './product-list/ProductList.component';
import { ProductData } from './product/product-data';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    EditProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
