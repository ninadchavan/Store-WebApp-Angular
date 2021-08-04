import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'prod-details',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent {
  constructor(private route: ActivatedRoute, private service:ProductService, private router:Router){}

  product_param
  product:Product = new Product()
  errorMessage:string

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.product_param = params
      this.service.getProduct(this.product_param.params.id).subscribe({
        next:product => {
          this.product = product
        },
        error:err => this.errorMessage = err
      })
    })
  }

  delete(id:number):void{
    if(confirm("Are you sure to delete" + this.product.name)){
      this.service.deleteProduct(id).subscribe(
        () => this.router.navigateByUrl('/products')
      )
    }
  }
}