import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import * as XLSX from "xlsx";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-user-enrollments",
  templateUrl: "./user-enrollments.component.html",
  styleUrls: ["./user-enrollments.component.scss"],
})
export class UserEnrollmentsComponent implements OnInit {
  enrollments: any;
  todayDate: any = new Date();
  planenddate: any;
  daysRemain: any;
  noData: String = "- -";
  isActive: boolean = true;
  userId: number;
  pagedItems: Array<any>;
  constructor(
    private service: UserService,
    @Inject(DOCUMENT) private document: Document,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    //Displaying user enrollments
    if(localStorage.getItem("isRemember")=="true")
      this.userId = parseInt(localStorage.getItem("userid"));
    else 
      this.userId = parseInt(sessionStorage.getItem("userid"));
    
    this.service.UserEnrollments(this.userId).subscribe((res: any) => {
      this.enrollments = res;
    });
  }
  // Displaying number of days remaining in expiring membership
  daysRemaining(planEndDate) {
    this.planenddate = new Date(planEndDate);
    this.daysRemain = Math.floor(
      (this.planenddate - this.todayDate) / (1000 * 60 * 60 * 24)
    );
    /* Enabling renew membership button if days remaining in expiring membership are less 
  than or equal to 10*/
    if (this.daysRemain == 0) {
      this.isActive = false;
    }
    return this.daysRemain;
  }

  //rejection message
  rejectionMessage() {
    this.toastr.success("We dont any batches available !!", "", {
      timeOut: 1000,
    });
  }

  //renew membership
  renew(enrollmentId) {
    this.service.renewMembership(enrollmentId).subscribe((res: any) => {});
    this.toastr.success("Your request will be send for renewal !!", "", {
      timeOut: 1000,
    });
    this.document.location.reload();
  }

  beginPagination(pagedItems: Array<any>) {
    this.pagedItems = pagedItems;
  }
  //Excel report
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
