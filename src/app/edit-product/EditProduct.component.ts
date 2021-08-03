import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'prod-edit',
  templateUrl: './EditProduct.component.html',
  styleUrls: ['./EditProduct.component.css']
})
export class EditProductComponent {
  constructor(private route:ActivatedRoute, private service:ProductService, private router:Router){}

  product_param
  errorMessage:string
  editedProduct:Product = new Product()

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.product_param = params
      this.service.getProduct(this.product_param.params.id).subscribe({
        next:product => {
          this.editedProduct = product
        },
        error:err => this.errorMessage = err
      })
    })
  }

  getValidationMessages(state:any, thingName?:string){
    // if we had passed the refrence variable initialised with ngModel from the template,
    // then state.path contains the name attribute of that element
    console.log(state, thingName, state.path)
    let thing: string = state.path || thingName
    let messages: string[] = []

    if(state.errors){
        for(let errorName in state.errors){
            switch(errorName){
                case "required":
                    messages.push(`You must enter a Product ${thing}`)
                    break
                case "minlength":
                    messages.push(`A ${thing} must be atleast ${state.errors['minlength'].requiredLength}`)
                    break
                case "pattern":
                    messages.push(`The Product ${thing} contains illegal characters`)
                    break
            }
        }
    }
    return messages
  }

  formSubmitted:boolean = false
  submitForm(form:NgForm):void{
    this.formSubmitted = true

    if(form.valid){
      console.log(this.editedProduct)
      this.service.updateProduct(this.editedProduct).subscribe(
        () => this.router.navigateByUrl('/products/' + this.editedProduct.id)
      )
    }
  }
}