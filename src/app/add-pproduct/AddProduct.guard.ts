import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { AddProductComponent } from "./AddProduct.component";

@Injectable({
    providedIn: 'root'
})

export class AddProductGuard implements CanDeactivate<AddProductComponent>{
    canDeactivate(component: AddProductComponent): Observable<boolean> | Promise<boolean> | boolean {

        if( !component.formSubmitted ){

            // console.log("YESS")
            return confirm(`Navigate away and lose your progress}`)
        }
        return true
    }
}