import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../product/product.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ProductListComponent } from './ProductList.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

describe('ProductListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        Ng2SearchPipeModule
      ],
      declarations: [
        ProductListComponent
      ],
      providers: [
          ProductService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(ProductListComponent)
    const component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the prodlist', () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const prodlist = fixture.componentInstance;
    expect(prodlist).toBeTruthy();
  });

  it('should have getProducts service', () => {
    const service: ProductService = TestBed.inject(ProductService)
    expect(service.getProducts).toBeTruthy()
  })

});
