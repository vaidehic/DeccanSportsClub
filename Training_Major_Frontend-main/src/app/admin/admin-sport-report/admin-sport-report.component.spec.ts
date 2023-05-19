import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSportReportComponent } from './admin-sport-report.component';

describe('AdminSportReportComponent', () => {
  let component: AdminSportReportComponent;
  let fixture: ComponentFixture<AdminSportReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSportReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSportReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
