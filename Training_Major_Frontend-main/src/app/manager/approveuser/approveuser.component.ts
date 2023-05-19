import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { ManagerService } from "../manager.service";

@Component({
  selector: "app-approveuser",
  templateUrl: "./approveuser.component.html",
  styleUrls: ["./approveuser.component.scss"],
})
export class ApproveuserComponent implements OnInit {
  user: any = [];
  enrollmentId: number;
  batches: any[];
  sportId: number;
  batchId: number;
  constructor(
    private manager: ManagerService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    //getting all batches
    this.enrollmentId = this.route.snapshot.params["id"];
    this.manager.getEnrollmentById(this.enrollmentId).subscribe((data) => {
      this.user = data;

      //getting batches with sportId
      this.sportId = this.user.sport.sportId;
      this.manager
        .getAllBatchesBySport(this.sportId)
        .subscribe((res: any[]) => {
          this.batches = res;
        });
    });
  }

  //getting batchId of Selected Batch
  onChange(batchId) {
    this.batchId = batchId;
  }

  // Approve user for enrollment
  approveUser() {
    this.manager
      .acceptUser(this.enrollmentId, this.batchId)
      .subscribe((res: any[]) => {
        this.batches = res;
        this.toastr.success(
          "Member admission to club has been confirmed !!",
          "",
          { timeOut: 1000 }
        );
        this.router.navigate(["/manager/enrollment"]);
      });
  }
}
