import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNavBarComponent } from './product-nav-bar.component';

describe('ProductNavBarComponent', () => {
  let component: ProductNavBarComponent;
  let fixture: ComponentFixture<ProductNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
