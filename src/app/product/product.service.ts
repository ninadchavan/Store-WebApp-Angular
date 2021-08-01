import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/observable"


@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private producturl = "api/product/products.json"
    constructor(private http:HttpClient){}

    getProducts():Observable<Product>{
        return this.http.get<Product[]>(this.producturl).pipe(tap())
    }

}