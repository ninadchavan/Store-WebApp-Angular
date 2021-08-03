import { Component } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'prod-list',
  templateUrl: './ProductList.component.html',
  styleUrls: ['./ProductList.component.css']
})
export class ProductListComponent{

  products:Product[] = []
  errorMessage:string

  constructor(private service:ProductService){}
    ngOnInit():void{
        this.service.getProducts().subscribe({
            next:products => {
                this.products=products
            },
            error:err => this.errorMessage = err
        })
    }
}
