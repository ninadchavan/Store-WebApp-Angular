import { Component } from '@angular/core';

@Component({
  selector: 'prod-list',
  templateUrl: './ProductList.component.html',
  styleUrls: ['./ProductList.component.css']
})
export class ProductListComponent{
  productlist:string[] = ["prod1","prod2","prod3","prod4","prod5","prod6","prod7","prod8","prod9","prod10","prod11","prod12"]
}
