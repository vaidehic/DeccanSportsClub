import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/user/user.service";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-adminhome",
  templateUrl: "./adminhome.component.html",
  styleUrls: ["./adminhome.component.scss"],
})
export class AdminhomeComponent implements OnInit {
  managers: any = [];
  sports: any = [];
  constructor(
    private admin: AdminService,
    private userService: UserService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    //Getting all Managers
    this.admin.getManagers().subscribe((data) => {
      this.managers = data;
    });
  }

  //Update Manager
  updateManager(id: number) {
    this.route.navigate(["/admin/updateManager", id]);
  }

  //delete Manager
  deleteManager(userId: number) {
    if (confirm("Are you sure you want to DELETE?")) {
      this.admin.deleteManager(userId).subscribe((data) => {
        this.toastr.success("Manager deleted successfully", "", {
          timeOut: 1000,
        });
        this.ngOnInit();
      });
    } else {
      this.ngOnInit();
    }
  }
}
