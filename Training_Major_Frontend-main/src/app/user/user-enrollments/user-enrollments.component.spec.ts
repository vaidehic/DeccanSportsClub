import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnrollmentsComponent } from './user-enrollments.component';

describe('UserEnrollmentsComponent', () => {
  let component: UserEnrollmentsComponent;
  let fixture: ComponentFixture<UserEnrollmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEnrollmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
