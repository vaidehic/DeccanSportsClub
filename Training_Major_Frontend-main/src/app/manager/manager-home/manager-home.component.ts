import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ManagerService } from "../manager.service";

@Component({
  selector: "app-manager-home",
  templateUrl: "./manager-home.component.html",
  styleUrls: ["./manager-home.component.scss"],
})
export class ManagerHomeComponent implements OnInit {
  batch: any = [];
  userid: number;
  constructor(
    private manager: ManagerService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    //getting all batches for perticular manager
    setTimeout(() => {
      this.userid = parseInt(sessionStorage.getItem("userid"));
      this.manager.getBatchesByManager(this.userid).subscribe((data) => {
        this.batch = data;
      });
    }, 1000);
  }

  //update batch
  updateBatch(id: number) {
    this.route.navigate(["/manager/updatebatch", id]);
  }

  //delete batch
  deleteBatch(batchid: number) {
    alert("Do you really want to delete?");
    this.manager.deleteBatch(batchid).subscribe((data) => {
      this.toastr.success("Batch deleted successfully", "", { timeOut: 1000 });
      this.ngOnInit();
    });
  }

  //add plan
  addPlan(form: any) {
    this.route.navigate(["/manager/addPlan", form.value]);
  }
}
