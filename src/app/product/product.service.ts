import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators"
import { Product } from "./product.model";


@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private producturl = "api/products"
    constructor(private http:HttpClient){}

    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.producturl).pipe(tap(data => console.log("All Data: " + JSON.stringify(data))),
        catchError(this.handleError))
    }

    getProduct(id:number):Observable<Product>{
        const url = `${this.producturl}/${id}`
        return this.http.get<Product>(url).pipe(
            tap(data => console.log('getProduct' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    // execute a POST
    addProduct(p:Product):Observable<any>{
        const url = `${this.producturl}`
        return this.http.post<Product>(url, p).pipe(
            tap(data => console.log("Added Product: " + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    // execute a PUT
    updateProduct(p:Product):Observable<Product>{
        const url = `${this.producturl}/${p.id}`
        return this.http.put(url, p).pipe(
            tap(data => console.log('Updated Product: ' + JSON.stringify(p))),
            catchError(this.handleError)
        )
    }

    deleteProduct(id:number){
        const url = `${this.producturl}/${id}`
        return this.http.delete<Product>(url).pipe(
            tap(data => console.log('Deleted Product: ' + id)),
            catchError(this.handleError)
        )
    }

    private handleError(err){
        let errorMessage: string
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`
        }
        else{
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`
        }
        console.log(err)
        return throwError(errorMessage)
    }

}