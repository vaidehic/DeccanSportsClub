import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ManagerService } from "../manager.service";
import * as XLSX from "xlsx";

@Component({
  selector: "app-list-plans",
  templateUrl: "./list-plans.component.html",
  styleUrls: ["./list-plans.component.scss"],
})
export class ListPlansComponent implements OnInit {
  plans: any;
  managerId: number;
  pagedItems: Array<any>;
  constructor(private service: ManagerService, private route: Router) {}

  ngOnInit() {
    this.managerId = parseInt(sessionStorage.getItem("userid"));
    this.service.getPlansByManager(this.managerId).subscribe((res: any) => {
      this.plans = res;
    });
  }

  deletePlan(planId) {
    this.service.deletePlan(planId).subscribe((res: any) => {
      alert("Do you really want to delete?");
      this.ngOnInit();
    });
  }
  updatePlan(planId) {
    this.route.navigate(["/manager/updateplan/", planId]);
  }

  beginPagination(pagedItems: Array<any>) {
    this.pagedItems = pagedItems;
  }

  //-------------------------------------------------------------------------->
  @ViewChild("TABLE", { static: false }) TABLE: ElementRef;
  title = "Excel";
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "report.xlsx");
  }
}
