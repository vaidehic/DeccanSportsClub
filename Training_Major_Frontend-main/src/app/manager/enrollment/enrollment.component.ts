import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ManagerService } from "../manager.service";
import * as XLSX from "xlsx";

@Component({
  selector: "app-enrollment",
  templateUrl: "./enrollment.component.html",
  styleUrls: ["./enrollment.component.scss"],
})
export class EnrollmentComponent implements OnInit {
  enrollment: any = [];
  reason: string;
  userid: number;
  pagedItems: Array<any>;
  constructor(
    private manager: ManagerService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userid = parseInt(sessionStorage.getItem("userid"));
    this.manager.getEnrollmentsByManager(this.userid).subscribe((data) => {
      this.enrollment = data;
    });
  }

  //reject without reason
  rejectUser(id: number) {
    this.manager.rejectUser(id).subscribe((data) => {
      this.ngOnInit();
      this.toastr.success("Member admission to club rejected", "", {
        timeOut: 1000,
      });
    });
  }

  approveUser(id: number) {
    this.route.navigate(["manager/approveuser/", id]);
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
