import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-myprofile",
  templateUrl: "./myprofile.component.html",
  styleUrls: ["./myprofile.component.scss"],
})
export class MyprofileComponent implements OnInit {
  profile: any;
  Bmi: number;
  userId: number;
  height: number;
  weight: number;
  constructor(private user: UserService, private router: Router) {}

  ngOnInit() {
    this.userId = parseInt(sessionStorage.getItem("userid"));
    this.user.getProfile(this.userId).subscribe((data) => {
      this.profile = data;
      this.getBMI();
    });
  }

  getBMI() {
    let height = this.profile.height;
    let weight = this.profile.weight;

    this.Bmi = (weight / (height * height)) * 10000;
  }
}
