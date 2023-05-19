import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterprofileComponent } from './registerprofile.component';

describe('RegisterprofileComponent', () => {
  let component: RegisterprofileComponent;
  let fixture: ComponentFixture<RegisterprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
