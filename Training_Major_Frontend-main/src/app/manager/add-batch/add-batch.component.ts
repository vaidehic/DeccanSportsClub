import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/user/user.service";
import { ManagerHomeComponent } from "../manager-home/manager-home.component";
import { ManagerService } from "../manager.service";

@Component({
  selector: "app-add-batch",
  templateUrl: "./add-batch.component.html",
  styleUrls: ["./add-batch.component.scss"],
})
export class AddBatchComponent implements OnInit {
  batch: any;
  sport: any = [];
  sportId: number;
  managerId: number;
  constructor(
    private manager: ManagerService,
    private user: UserService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  // getting all sports to display in options
  ngOnInit() {
    this.managerId = parseInt(sessionStorage.getItem("userid"));
    this.manager.getAllSportsByManager(this.managerId).subscribe((data) => {
      this.sport = data;
    });
  }

  //getting sport id
  onChange(sId) {
    this.sportId = sId;
  }
  //add batch
  addBatch(form: any) {
    this.manager.addBatch(this.sportId, form.value).subscribe((data) => {
      this.toastr.success("Batch added successfully", "", { timeOut: 1000 });
      this.route.navigate(["/manager"]);
    });
  }
}
