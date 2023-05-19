import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/user/user.service";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-updatemanager",
  templateUrl: "./updatemanager.component.html",
  styleUrls: ["./updatemanager.component.scss"],
})
export class UpdatemanagerComponent implements OnInit {
  managerId: number;
  sport: any = [];
  manager: any;
  sportId: number;
  constructor(
    private router: ActivatedRoute,
    private admin: AdminService,
    private route: Router,
    private user: UserService,
    private toastr: ToastrService
  ) {}

  //to update manager
  ngOnInit() {
    this.managerId = this.router.snapshot.params["id"];
    this.admin.getManager(this.managerId).subscribe((data) => {
      this.manager = data;
      //to get sports for manager
      this.getSportsForManager();
    });
  }

  getSportsForManager() {
    this.user.getSportForManager().subscribe((data) => {
      this.sport = data;
    });
  }

  //getting sport id
  onChange(sId) {
    this.sportId = sId;
  }

  //update manager and navif=gate to admin home
  updateManager() {
    this.admin
      .updateManager(this.managerId, this.sportId, this.manager)
      .subscribe((data) => {
        this.toastr.success("Manager updated successfully", "", {
          timeOut: 1000,
        });
        this.route.navigate(["/admin"]);
      });
  }
}
