import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-viewsports",
  templateUrl: "./viewsports.component.html",
  styleUrls: ["./viewsports.component.scss"],
})
export class ViewsportsComponent implements OnInit {
  sports: any = [];
  constructor(
    private service: AdminService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.service.getAllSports().subscribe((res: any) => {
      this.sports = res;
    });
  }

  //delete sport by id
  deleteSport(sportId: number) {
    this.service.deleteSport(sportId).subscribe((res: any) => {
      alert("Do you really want to delete?");
      this.toastr.success("Sport deleted successfully", "", { timeOut: 1000 });
      this.ngOnInit();
    });
  }
  //update sport
  updateSport(sportId: number) {
    this.route.navigate(["/admin/updatesport/", sportId]);
  }
}
