import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-unlock-account",
  templateUrl: "./unlock-account.component.html",
  styleUrls: ["./unlock-account.component.scss"],
})
export class UnlockAccountComponent implements OnInit {
  users: any;
  constructor(
    private service: AdminService,
    @Inject(DOCUMENT) private document: Document,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    //Displaying users who requested for unlocking accounts
    this.service.RequestForUnlock().subscribe((res: any) => {
      this.users = res;
    });
  }

  //unlock account
  Unlock(email, name) {
    this.service.unlock(email, "12345678").subscribe((res: any) => {
      if (res != null) {
        this.toastr.success(
          " account of " + name + " has been unlocked !!",
          "",
          { timeOut: 1000 }
        );
        this.document.location.reload();
      }
    });
  }
}
