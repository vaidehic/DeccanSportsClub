import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-forgetpassword",
  templateUrl: "./forgetpassword.component.html",
  styleUrls: ["./forgetpassword.component.scss"],
})
export class ForgetpasswordComponent implements OnInit {
  email: string;
  constructor(
    private router: ActivatedRoute,
    private service: SharedService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((res) => {
      this.email = res.get("email");
    });
  }
  confirmPass(pass, confirmpass) {
    if (pass === confirmpass) {
      this.service.confirmPass(pass, this.email).subscribe((res) => {
        this.toastr.success("password has been changed", "", { timeOut: 1000 });
      });
      this.route.navigate(["login"]);
    } else {
      this.toastr.success("Please confirm your password", "", {
        timeOut: 1000,
      });
    }
  }
}
