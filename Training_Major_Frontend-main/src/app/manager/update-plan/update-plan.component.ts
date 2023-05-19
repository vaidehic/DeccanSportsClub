import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { UserService } from "src/app/user/user.service";
import { ManagerService } from "../manager.service";

@Component({
  selector: "app-update-plan",
  templateUrl: "./update-plan.component.html",
  styleUrls: ["./update-plan.component.scss"],
})
export class UpdatePlanComponent implements OnInit {
  plan: any;
  planId: number;
  sport: any = [];
  sportId: number;
  userid: number;
  constructor(
    private manager: ManagerService,
    private route: ActivatedRoute,
    private router: Router,
    private user: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userid = parseInt(sessionStorage.getItem("userid"));
    this.planId = this.route.snapshot.params["id"];
    this.manager.getPlan(this.planId).subscribe((data) => {
      this.plan = data;
      console.log(this.plan);

      //to get all sports
      this.getAllSports();
    });
  }

  getAllSports() {
    this.manager.getAllSportsByManager(this.userid).subscribe((data) => {
      this.sport = data;
      console.log(this.sport);
    });
  }

  //getting sport id
  onChange(sId) {
    console.log("changing");
    this.sportId = sId;
    console.log(this.sportId);
  }

  //update plan and navigate manager home
  updatePlan() {
    console.log("inside update.ts");
    this.manager
      .updatePlan(this.planId, this.sportId, this.plan)
      .subscribe((data) => {
        this.toastr.success("Plan updated successfully","",{timeOut :  1000 })
        this.router.navigate(["/manager/listplans"]);
      });
  }
}
