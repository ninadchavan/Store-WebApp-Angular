import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { EditProductComponent } from "./EditProduct.component";

@Injectable({
    providedIn: 'root'
})

export class EditProductGuard implements CanDeactivate<EditProductComponent>{
    canDeactivate(component: EditProductComponent): Observable<boolean> | Promise<boolean> | boolean {
        console.log(component.originalProduct, component.editedProduct)
        if( !component.formSubmitted ){

            // console.log("YESS")
            return confirm(`Navigate away and lose all changes}`)
        }
        return true
    }
}

// (component.originalProduct.name === component.editedProduct.name && 
// component.originalProduct.code === component.editedProduct.code && 
// component.originalProduct.category === component.editedProduct.category && 
// component.originalProduct.description === component.editedProduct.description && 
// component.originalProduct.price === component.editedProduct.price && 
// component.originalProduct.rating === component.editedProduct.rating)