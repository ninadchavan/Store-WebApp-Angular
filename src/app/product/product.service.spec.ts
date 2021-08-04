import { TestBed, waitForAsync } from '@angular/core/testing';
import { ProductService } from '../product/product.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { Product } from './product.model';

describe('ProductListComponent', () => {

    let prodservice:ProductService
    let httpTestingController:HttpTestingController

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
        ],
        providers: [
            ProductService
        ]
        }).compileComponents();

        prodservice = TestBed.inject(ProductService)
        httpTestingController = TestBed.inject(HttpTestingController)
    });

    it('should create the prodservice', () => {
        expect(prodservice).toBeTruthy();
    });

    it('should successfully get products', waitForAsync(()=>{
        const product:Product[] = [{
            "id":0,
            "name":"Redmi Note 8",
            "code":"mob-004",
            "category":"Mobiles",
            "price":4000,
            "description":"Best Phone",
            "rating":3.5
        }];

        prodservice.getProducts().subscribe(res => expect(res).toEqual(product));
        let prodRequest=httpTestingController.expectOne('api/products');
        prodRequest.flush(product);
    }));

    it('should successfully get product', waitForAsync(()=>{
        const product:Product = {
            "id":0,
            "name":"Redmi Note 8",
            "code":"mob-004",
            "category":"Mobiles",
            "price":4000,
            "description":"Best Phone",
            "rating":3.5
        };

        prodservice.getProduct(0).subscribe(res => expect(res).toEqual(product));
        let prodRequest=httpTestingController.expectOne('api/products/0');
        prodRequest.flush(product);
    }));

    it('should successfully add product', waitForAsync(()=>{
        const product:Product = {
            "id":0,
            "name":"Redmi Note 8",
            "code":"mob-004",
            "category":"Mobiles",
            "price":4000,
            "description":"Best Phone",
            "rating":3.5
        };

        prodservice.addProduct(product).subscribe(res => expect(res).toEqual(product));
        let prodRequest=httpTestingController.expectOne('api/products');
        prodRequest.flush(product);
    }));

    it('should successfully update product', waitForAsync(()=>{
        const product:Product = {
            "id":0,
            "name":"Redmi Note 8",
            "code":"mob-004",
            "category":"Mobiles",
            "price":4000,
            "description":"Best Phone",
            "rating":3.5
        };

        prodservice.updateProduct(product).subscribe(res => expect(res).toEqual(product));
        let prodRequest=httpTestingController.expectOne('api/products/0');
        prodRequest.flush(product);
    }));

    it('should successfully delete product', waitForAsync(()=>{
        const product:Product = {
            "id":0,
            "name":"Redmi Note 8",
            "code":"mob-004",
            "category":"Mobiles",
            "price":4000,
            "description":"Best Phone",
            "rating":3.5
        };

        prodservice.deleteProduct(0).subscribe(res => expect(res).toEqual(product));
        let prodRequest=httpTestingController.expectOne('api/products/0');
        prodRequest.flush(product);
    }));

});
