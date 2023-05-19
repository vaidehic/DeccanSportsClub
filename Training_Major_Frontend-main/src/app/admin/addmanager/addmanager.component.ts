import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/user/user.service";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-addmanager",
  templateUrl: "./addmanager.component.html",
  styleUrls: ["./addmanager.component.scss"],
})
export class AddmanagerComponent implements OnInit {
  sport: any = [];
  sportId: number;
  validemail: boolean = false;
  constructor(
    private adminService: AdminService,
    private user: UserService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.user.getSportForManager().subscribe((data) => {
      this.sport = data;
    });
  }
  //getting sport id
  onChange(sId) {
    this.sportId = sId;
  }

  //add manager

  addManager(form: any) {
    if (this.checkEmail(form.value.email)) {
      this.adminService
        .addManager(this.sportId, form.value)
        .subscribe((data) => {
          this.toastr.success("Manager added successfully", "", {
            timeOut: 1000,
          });

          this.route.navigate(["/admin"]);
        });
    } else {
      this.validemail = true;
    }
  }
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
}
