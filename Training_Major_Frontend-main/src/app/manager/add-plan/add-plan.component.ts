import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ManagerService } from "../manager.service";
import { UserService } from "src/app/user/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-plan",
  templateUrl: "./add-plan.component.html",
  styleUrls: ["./add-plan.component.scss"],
})
export class AddPlanComponent implements OnInit {
  plan: any;
  userid: any;
  sport: any = [];
  sportId: number;
  constructor(
    private manager: ManagerService,
    private user: UserService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  // getting all sports to display in options
  ngOnInit() {
    this.userid = parseInt(sessionStorage.getItem("userid"));
    this.manager.getAllSportsByManager(this.userid).subscribe((data) => {
      this.sport = data;
    });
  }

  //getting sport id
  onChange(sId) {
    this.sportId = sId;
  }

  //add new plan/offer
  addPlan(form) {
    this.manager.addPlan(this.sportId, form.value).subscribe((data) => {
      this.toastr.success("Plan added successfully", "", { timeOut: 1000 });
      this.route.navigate(["/manager/listplans"]);
    });
  }
}
