import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SharedService } from "../shared.service";
@Component({
  selector: "app-changepassword",
  templateUrl: "./changepassword.component.html",
  styleUrls: ["./changepassword.component.scss"],
})
export class ChangepasswordComponent implements OnInit {
  email: String;
  role: String;
  newpassword: String;
  confirmpassword: String;

  constructor(
    private service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  //change password
  changePassword(changepassForm) {
    if (this.newpassword === this.confirmpassword) {
      this.email = sessionStorage.getItem("username");
      this.service
        .changePassword(changepassForm.value, this.email)
        .subscribe((data) => {
          if (data) {
            this.toastr.success("password changed successfully", "", {
              timeOut: 1000,
            });
            this.role = sessionStorage.getItem("userrole");
            if (this.role === "ROLE_MEMBER") {
              this.router.navigate(["user"]);
            }
            if (this.role === "ROLE_ADMIN") {
              this.router.navigate(["admin"]);
            }
            if (this.role === "ROLE_MANAGER") {
              this.router.navigate(["manager"]);
            }
          } else {
            this.toastr.success("old password is incorrect", "", {
              timeOut: 1000,
            });
          }
        });
    } else {
      this.toastr.success(
        "new password and confirm password does not match",
        "",
        { timeOut: 1000 }
      );
    }
  }
}
