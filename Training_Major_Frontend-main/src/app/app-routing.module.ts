import { Routes, RouterModule } from "@angular/router";
import { Userrole } from "./Models/userrole";
import { AuthGuard } from "./shared/auth.guard";
import { NgModule } from "@angular/core";
import { AdminhomeComponent } from "./admin/adminhome/adminhome.component";
import { AddBatchComponent } from "./manager/add-batch/add-batch.component";
import { EnrollmentComponent } from "./manager/enrollment/enrollment.component";
import { ManagerHomeComponent } from "./manager/manager-home/manager-home.component";
import { UpdateBatchComponent } from "./manager/update-batch/update-batch.component";
import { LoginComponent } from "./shared/login/login.component";
import { UserEnrollmentsComponent } from "./user/user-enrollments/user-enrollments.component";
import { UserHomeComponent } from "./user/user-home/user-home.component";
import { ViewPlansComponent } from "./user/view-plans/view-plans.component";

import { UpdatemanagerComponent } from "./admin/updatemanager/updatemanager.component";
import { AddmanagerComponent } from "./admin/addmanager/addmanager.component";
import { AddSportComponent } from "./admin/add-sport/add-sport.component";
import { RegisterComponent } from "./shared/register/register.component";
import { AddPlanComponent } from "./manager/add-plan/add-plan.component";
import { ListPlansComponent } from "./manager/list-plans/list-plans.component";
import { UpdatePlanComponent } from "./manager/update-plan/update-plan.component";
import { ViewsportsComponent } from "./admin/viewsports/viewsports.component";
import { ForgetpasswordComponent } from "./shared/forgetpassword/forgetpassword.component";
import { ApproveuserComponent } from "./manager/approveuser/approveuser.component";
import { UnlockAccountComponent } from './admin/unlock-account/unlock-account.component';
import { UpdateSportComponent } from "./admin/update-sport/update-sport.component";

import { SportReportComponent } from './manager/sport-report/sport-report.component';

import { ChangepasswordComponent } from './shared/changepassword/changepassword.component';
import { PlanReportComponent } from './manager/plan-report/plan-report.component';
import { EnrollmentReportComponent } from './manager/enrollment-report/enrollment-report.component';
import { AdminSportReportComponent } from './admin/admin-sport-report/admin-sport-report.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';
import { RegisterprofileComponent } from './user/registerprofile/registerprofile.component';


const routes: Routes = [
  {
    path: "user",
    component: UserHomeComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[1] },
  },
  {
    path: "plans/:sportid",
    component: ViewPlansComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[1] },
  },
  {
    path: "plans",
    component: ViewPlansComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[1] },
  },
  {
    path: "myprofile",
    component: MyprofileComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[1] },
  },
  {
    path: "myprofile/registerprofile",
    component: RegisterprofileComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[1] },
  },
  {
    path: "userenrollments",
    component: UserEnrollmentsComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[1] },
  },
  {
    path: "admin",
    component: AdminhomeComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[0] },
  },
  {
    path: "admin/viewsports",
    component: ViewsportsComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[0] },
  },
  {
    path: "admin/addsport",
    component: AddSportComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[0] },
  },
  {
    path: "manager",
    component: ManagerHomeComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },
  {
    path: "manager/addbatch",
    component: AddBatchComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },
  {
    path: "manager/updatebatch/:id",
    component: UpdateBatchComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },
  {
    path: "manager/enrollment",
    component: EnrollmentComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },
  {
    path: "manager/approveuser/:id",
    component: ApproveuserComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },
  {
    path: "admin/updatesport/:id",
    component:UpdateSportComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[0] },
  },
{
    path: "manager/sportreport",
    component: SportReportComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },
  {
    path: "manager/planreport",
    component: PlanReportComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },
  {
    path: "manager/enrollmentreport",
    component: EnrollmentReportComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },
  {
    path: "admin/sportreport",
    component: AdminSportReportComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[0] },
  },
  {
    path: "admin/planreport",
    component: PlanReportComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[0] },
  },
  {
    path: "admin/enrollmentreport",
    component: EnrollmentReportComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[0] },
  },

  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "forget/:email", component: ForgetpasswordComponent },
  {
    path: "admin/updateManager/:id",
    component: UpdatemanagerComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[0] },
  },
  {
    path: "admin/addmanager",
    component: AddmanagerComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[0] },
  },
  {
    path: "manager/updateplan/:id",
    component: UpdatePlanComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },
  {
    path: "manager/listplans",
    component: ListPlansComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },

  {
    path: "manager/addplan",
    component: AddPlanComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[2] },
  },
  {
    path: "admin/unlock",
    component: UnlockAccountComponent,
    canActivate: [AuthGuard],
    data: { role: Userrole[0] },
  },
  {
    path: "changepassword",
    component:ChangepasswordComponent,
    canActivate: [AuthGuard],
    data: { role:"All"},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
