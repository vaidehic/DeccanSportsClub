import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-add-sport",
  templateUrl: "./add-sport.component.html",
  styleUrls: ["./add-sport.component.scss"],
})
export class AddSportComponent implements OnInit {
  image: File;
  constructor(
    private service: AdminService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  submit(addForm) {
    //enroll all
    this.service.addSport(this.image, addForm.value).subscribe((data) => {
      this.toastr.success("sport added successfully", "", { timeOut: 1000 });
      this.router.navigate(["admin/viewsports"]);
    });
  }
  submiting(e) {
    this.image = e.target.files[0];
  }
}
