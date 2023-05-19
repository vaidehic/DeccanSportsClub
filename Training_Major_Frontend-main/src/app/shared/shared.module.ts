import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register/register.component";
import { HttpClientModule } from "@angular/common/http";
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetpasswordComponent, ChangepasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [LoginComponent],
})
export class SharedModule {}
