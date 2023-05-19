import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { UpdatemanagerComponent } from "./updatemanager/updatemanager.component";
import { AddmanagerComponent } from "./addmanager/addmanager.component";

import { ViewsportsComponent } from "./viewsports/viewsports.component";
import { AddSportComponent } from "./add-sport/add-sport.component";
import { UpdateSportComponent } from "./update-sport/update-sport.component";
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';
import { AdminSportReportComponent } from './admin-sport-report/admin-sport-report.component';

@NgModule({
  declarations: [
    AdminhomeComponent,
    AddSportComponent,
    UpdateSportComponent,
    ViewsportsComponent,
    UpdatemanagerComponent,
    AddmanagerComponent,
    UnlockAccountComponent,
    AdminSportReportComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
  ],
  exports: [
    AdminhomeComponent,
    ViewsportsComponent,
    AddmanagerComponent,
    UpdatemanagerComponent,
    UnlockAccountComponent,
    AdminSportReportComponent
  ],
})
export class AdminModule {}
