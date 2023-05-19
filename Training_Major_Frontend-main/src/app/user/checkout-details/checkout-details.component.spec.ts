import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDetailsComponent } from './checkout-details.component';

describe('CheckoutDetailsComponent', () => {
  let component: CheckoutDetailsComponent;
  let fixture: ComponentFixture<CheckoutDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
