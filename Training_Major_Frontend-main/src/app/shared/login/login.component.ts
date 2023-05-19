import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/user/user.service";
import { AuthenticationService } from "../authentication.service";
import { SharedService } from "../shared.service";
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { GlobalErrorHandler } from "../global-error-handler";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  invalidLogin = false;
  email: null;
  showotpdiv: boolean = false;
  noOfAttempsAvailable: number;
  showModalForUnlock: boolean = true;
  mandatory: boolean = false;
  emailInvalid: boolean = false;
  showConfirmPassword: boolean = false;
  isRemember: string = "false";
  isLocked: boolean = false;

  constructor(
    private service: AuthenticationService,
    private router: Router,
    private shareService: SharedService,
    private route: Router,
    private uservice: UserService,
    private sservice: SharedService,
    private toastr: ToastrService,
    //  private customError: GlobalErrorHandler,

    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {}

  FieldsChange(values: any) {
    this.isRemember = values.currentTarget.checked;
  }

  //Login 
  Login(data) {
    localStorage.setItem("isRemember", this.isRemember);
    if (data.form.status == "INVALID") {
      this.mandatory = true;
    } else if (!this.checkEmail(data.form.value.username)) {
      this.emailInvalid = true;
    } else {
      this.emailInvalid = false;
      this.username = data.form.value.username;
      this.password = data.form.value.password;
      this.service.authenticate(this.username, this.password).subscribe(
        (data: any) => {
          this.toastr.success("Login Successful !!", "", { timeOut: 1000 });
          this.uservice.getUserByEmail(this.username).subscribe((res: any) => {
            if (localStorage.getItem("isRemember") == "true")
              localStorage.setItem("userid", res.userId);
            else sessionStorage.setItem("userid", res.userId);
          });
          //checking roles to navigate
          if (data.roles[0] === "ROLE_MEMBER") {
            this.router.navigate(["user"]);
          }
          if (data.roles[0] === "ROLE_ADMIN") {
            this.router.navigate(["admin"]);
          }
          if (data.roles[0] === "ROLE_MANAGER") {
            this.router.navigate(["manager"]);
          }
          this.invalidLogin = false;
        },
        //Checking attempts
        (error) => {
          this.sservice.count(this.username).subscribe((res: any) => {
            this.noOfAttempsAvailable = 3 - res;
            if (res >= 3) {
              this.toastr.success("Your account has been locked !!", "", {
                timeOut: 1000,
              });
              this.isLocked = true;
            } else {
              this.toastr.success(
                "Please Enter valid credentials,you have only " +
                  this.noOfAttempsAvailable +
                  " attempt available",
                "",
                { timeOut: 1000 }
              );
            }
          });
          this.invalidLogin = true;
        }
      );
    }
  }

  //request for unlock account
  requestForUnlockAccount() {
    this.showModalForUnlock = false;
  }

  //request for unlock account
  sendEmailForUnlock(email) {
    if (!this.checkEmail(email)) {
      this.emailInvalid = true;
    } else {
      this.emailInvalid = false;
      this.sservice.requestForUnlockAccount(email).subscribe((res: any) => {
        this.toastr.success(
          "You will be notified via email, once account is unlock !",
          "",
          { timeOut: 1000 }
        );
        this.showModalForUnlock = true;
      });
    }
  }

  //forget password
  forgetPassword(email) {
    this.email = email;
    if (!this.checkEmail(email)) {
      this.emailInvalid = true;
    } else {
      this.emailInvalid = false;
      this.shareService.forgetPassword(email).subscribe((res) => {
        if (res == 1) {
          this.showotpdiv = true;
        } else {
          this.toastr.success("Email iD is invalid", "", { timeOut: 1000 });
        }
      });
    }
  }
  //verifying otp
  verifyOtp(otp) {
    this.shareService.verifyOtp(this.email, otp).subscribe((res) => {
      if (res == 1) {
        this.showConfirmPassword = true;
      } else {
        this.showConfirmPassword = false;
        this.toastr.success("OTP is invalid", "", { timeOut: 1000 });
      }
    });
  }
  //Email validation
  checkEmail(email) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
  //confirm password
  confirmPass(pass, confirmpass) {
    if (pass === confirmpass) {
      this.shareService.confirmPass(pass, this.email).subscribe((res) => {
        this.toastr.success("password has been changed", "", { timeOut: 1000 });
        this.document.location.reload();
      });
    } else {
      this.toastr.success("Please confirm your password", "", {
        timeOut: 1000,
      });
    }
  }
}
