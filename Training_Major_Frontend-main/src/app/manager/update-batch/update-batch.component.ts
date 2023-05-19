import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/user/user.service";
import { ManagerService } from "../manager.service";

@Component({
  selector: "app-update-batch",
  templateUrl: "./update-batch.component.html",
  styleUrls: ["./update-batch.component.scss"],
})
export class UpdateBatchComponent implements OnInit {
  batch: any;
  batchId: number;
  sport: any = [];
  sportId: number;
  managerId: number;
  constructor(
    private manager: ManagerService,
    private route: ActivatedRoute,
    private router: Router,
    private user: UserService,
    private toastr: ToastrService
  ) {}

  //to get batch to update
  ngOnInit() {
    this.batchId = this.route.snapshot.params["id"];
    this.manager.getBatch(this.batchId).subscribe((data) => {
      this.batch = data;

      //to get all sports
      this.getAllSports();
    });
  }

  //getting all sports by managerId
  getAllSports() {
    this.managerId = parseInt(sessionStorage.getItem("userid"));
    this.manager.getAllSportsByManager(this.managerId).subscribe((data) => {
      this.sport = data;
    });
  }

  //getting sport id
  onChange(sId) {
    this.sportId = sId;
  }
  //update batch and navigate to employee home
  updateBatch() {
    this.manager
      .updateBatch(this.batch.batchId, this.sportId, this.batch)
      .subscribe((data) => {
        this.toastr.success("Batch updated successfully", "", {
          timeOut: 1000,
        });
        this.router.navigate(["/manager"]);
      });
  }
}
