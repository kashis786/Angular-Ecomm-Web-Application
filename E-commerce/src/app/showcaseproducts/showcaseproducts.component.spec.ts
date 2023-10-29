import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseproductsComponent } from './showcaseproducts.component';

describe('ShowcaseproductsComponent', () => {
  let component: ShowcaseproductsComponent;
  let fixture: ComponentFixture<ShowcaseproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseproductsComponent]
    });
    fixture = TestBed.createComponent(ShowcaseproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
