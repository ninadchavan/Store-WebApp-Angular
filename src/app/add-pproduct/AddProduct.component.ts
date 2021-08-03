import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'prod-edit',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.css']
})
export class AddProductComponent {
    constructor(private route:ActivatedRoute, private service:ProductService, private router:Router){}

    product_param
    errorMessage:string
    addedProduct:Product = new Product()

    products:Product[] = []

    ngOnInit():void{
        this.service.getProducts().subscribe({
            next:products => {
                this.products=products
            },
            error:err => this.errorMessage = err
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

    private generateID():number{
        let candidate = 1
        this.products.forEach((ele) => {
            if(candidate!=ele.id){
                return candidate
            }
            candidate++;
        })
        return candidate
    }

    formSubmitted:boolean = false
    submitForm(form:NgForm):void{
        this.formSubmitted = true

        if(form.valid){
            this.addedProduct.id = this.generateID()
            console.log(this.addedProduct)
              this.service.addProduct(this.addedProduct).subscribe(
                () => this.router.navigateByUrl('/products')
              )
        }
    }
}