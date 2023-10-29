import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsProductComponent } from './deals-product.component';

describe('DealsProductComponent', () => {
  let component: DealsProductComponent;
  let fixture: ComponentFixture<DealsProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealsProductComponent]
    });
    fixture = TestBed.createComponent(DealsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
