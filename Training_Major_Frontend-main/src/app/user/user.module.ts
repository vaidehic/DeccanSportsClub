import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserHomeComponent } from "./user-home/user-home.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { ViewPlansComponent } from "./view-plans/view-plans.component";
import { RouterModule, Routes } from "@angular/router";
import { UserEnrollmentsComponent } from "./user-enrollments/user-enrollments.component";
import { AppModule } from "../app.module";
import { TimeAgoPipe } from "time-ago-pipe";
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RegisterprofileComponent } from './registerprofile/registerprofile.component';
import { CurrencyForAmountPipe } from './currency-for-amount.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    UserHomeComponent,
    ViewPlansComponent,
    UserEnrollmentsComponent,
    TimeAgoPipe,
    CheckoutDetailsComponent,
    MyprofileComponent,
    RegisterprofileComponent,
    CurrencyForAmountPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    JwPaginationModule
  ],
  exports: [UserHomeComponent, UserEnrollmentsComponent, 
            MyprofileComponent,RegisterprofileComponent],
})
export class UserModule {}
