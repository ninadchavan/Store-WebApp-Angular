import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductService } from '../product/product.service';
import { ProductDetailsComponent } from './ProductDetails.component';

describe('ProductDetailsComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [
            RouterTestingModule,
            HttpClientTestingModule,
            Ng2SearchPipeModule
          ],
          declarations: [
            ProductDetailsComponent
          ],
          providers: [
              ProductService
          ]
        }).compileComponents();
    });

    beforeEach(() => {
        const fixture = TestBed.createComponent(ProductDetailsComponent)
        const component = fixture.componentInstance
        fixture.detectChanges()
      })

    it('should create the proddetails', () => {
        const fixture = TestBed.createComponent(ProductDetailsComponent);
        const proddetails = fixture.componentInstance;
        expect(proddetails).toBeTruthy();
    });

    it('should have getProduct service', () => {
        const service: ProductService = TestBed.inject(ProductService)
        expect(service.getProduct).toBeTruthy()
    })

    it('should have deleteProduct service', () => {
        const service: ProductService = TestBed.inject(ProductService)
        expect(service.deleteProduct).toBeTruthy()
    })
  

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(ProductDetailsComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('project2 proddetails is running!');
  // });
});
