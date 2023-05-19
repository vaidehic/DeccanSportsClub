import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManagerHomeComponent } from "./manager-home/manager-home.component";
import { AddBatchComponent } from "./add-batch/add-batch.component";
import { UpdateBatchComponent } from "./update-batch/update-batch.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { EnrollmentComponent } from "./enrollment/enrollment.component";
import { AddPlanComponent } from "./add-plan/add-plan.component";
import { ListPlansComponent } from "./list-plans/list-plans.component";
import { UpdatePlanComponent } from "./update-plan/update-plan.component";
import { ApproveuserComponent } from "./approveuser/approveuser.component";
import { RouterModule } from "@angular/router";
import { SportReportComponent } from './sport-report/sport-report.component';
import { PlanReportComponent } from './plan-report/plan-report.component';
import { EnrollmentReportComponent } from './enrollment-report/enrollment-report.component';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    ManagerHomeComponent,
    AddBatchComponent,
    UpdateBatchComponent,
    EnrollmentComponent,
    AddPlanComponent,
    ListPlansComponent,
    UpdatePlanComponent,
    ApproveuserComponent,
    SportReportComponent,
    PlanReportComponent,
    EnrollmentReportComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    JwPaginationModule
  ],
  exports: [
    ManagerHomeComponent,
    AddBatchComponent,
    UpdateBatchComponent,
    EnrollmentComponent,
    AddPlanComponent,
    ListPlansComponent,
    UpdatePlanComponent,
    ApproveuserComponent,
    SportReportComponent,
    PlanReportComponent,
    EnrollmentReportComponent
  ],
})
export class ManagerModule {}
