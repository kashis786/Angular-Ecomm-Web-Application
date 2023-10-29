import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUpperComponent } from './footer-upper.component';

describe('FooterUpperComponent', () => {
  let component: FooterUpperComponent;
  let fixture: ComponentFixture<FooterUpperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterUpperComponent]
    });
    fixture = TestBed.createComponent(FooterUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
