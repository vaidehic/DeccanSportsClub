import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { UserService } from "src/app/user/user.service";
import { AdminService } from "../admin.service";
import { Sport } from "./sport";

@Component({
  selector: "app-update-sport",
  templateUrl: "./update-sport.component.html",
  styleUrls: ["./update-sport.component.scss"],
})
export class UpdateSportComponent implements OnInit {
  sportId: number;
  sport: Sport;
  sport1: any;
  image: File;
  constructor(
    private service: AdminService,
    private userservice: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  //get sport by id for update
  ngOnInit() {
    this.sportId = this.route.snapshot.params["id"];
    this.service.getSportById(this.sportId).subscribe((data) => {
      this.sport1 = data;
    });
  }
  //update sport
  updateSport(addForm) {
    this.service
      .updateSport(this.sportId, this.image, addForm.value)
      .subscribe((data) => {
        this.toastr.success("Sport updated successfully", "", {
          timeOut: 1000,
        });
        this.router.navigate(["admin/viewsports"]);
      });
  }
  submiting(e) {
    this.image = e.target.files[0];
  }
}
