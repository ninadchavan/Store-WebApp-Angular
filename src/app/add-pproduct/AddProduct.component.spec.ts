import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../product/product.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './AddProduct.component';

describe('AddProductComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        AddProductComponent
      ],
      providers: [
          ProductService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AddProductComponent)
    const component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the prodadd', () => {
    const fixture = TestBed.createComponent(AddProductComponent);
    const prodlist = fixture.componentInstance;
    expect(prodlist).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AddProductComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.row h1').textContent).toContain('Add New Product');
  });

  it('should have addProduct service', () => {
    const service: ProductService = TestBed.inject(ProductService)
    expect(service.addProduct).toBeTruthy()
  })

});
