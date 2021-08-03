import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'prod-details',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent {
  constructor(private route: ActivatedRoute){}

  product_param
  title=""

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.product_param = params
    })

    this.title = this.product_param.params.id
  }
}