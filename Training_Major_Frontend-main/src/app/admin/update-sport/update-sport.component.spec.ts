import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSportComponent } from './update-sport.component';

describe('UpdateSportComponent', () => {
  let component: UpdateSportComponent;
  let fixture: ComponentFixture<UpdateSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
