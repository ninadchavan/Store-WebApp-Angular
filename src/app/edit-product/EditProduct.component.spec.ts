import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../product/product.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { EditProductComponent } from './EditProduct.component';
import { FormsModule } from '@angular/forms';

describe('EditProductComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        EditProductComponent
      ],
      providers: [
          ProductService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(EditProductComponent)
    const component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the prodedit', () => {
    const fixture = TestBed.createComponent(EditProductComponent);
    const prodlist = fixture.componentInstance;
    expect(prodlist).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EditProductComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.row h1').textContent).toContain('Product Details');
  });

  it('should have updateProduct service', () => {
    const service: ProductService = TestBed.inject(ProductService)
    expect(service.updateProduct).toBeTruthy()
  })

});
