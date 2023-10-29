import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOffersComponent } from './single-offers.component';

describe('SingleOffersComponent', () => {
  let component: SingleOffersComponent;
  let fixture: ComponentFixture<SingleOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleOffersComponent]
    });
    fixture = TestBed.createComponent(SingleOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
