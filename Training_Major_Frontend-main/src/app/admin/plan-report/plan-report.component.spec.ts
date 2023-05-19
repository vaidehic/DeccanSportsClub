import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanReportComponent } from './plan-report.component';

describe('PlanReportComponent', () => {
  let component: PlanReportComponent;
  let fixture: ComponentFixture<PlanReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
