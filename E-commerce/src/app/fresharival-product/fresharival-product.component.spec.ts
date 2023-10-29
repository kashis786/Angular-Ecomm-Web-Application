import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresharivalProductComponent } from './fresharival-product.component';

describe('FresharivalProductComponent', () => {
  let component: FresharivalProductComponent;
  let fixture: ComponentFixture<FresharivalProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FresharivalProductComponent]
    });
    fixture = TestBed.createComponent(FresharivalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
