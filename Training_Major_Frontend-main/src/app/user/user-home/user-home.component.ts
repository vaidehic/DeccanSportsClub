import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { User } from "../view-plans/User";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"],
})
export class UserHomeComponent implements OnInit {
  sports: any = [];
  email: string;
  username: string;
  constructor(private service: UserService, private route: Router) {}

  ngOnInit() {
    this.service.getAllSports().subscribe((response) => {
      this.sports = response;
    });
    if(localStorage.getItem("isRemember")=="true")
      this.email = localStorage.getItem("username");
    else
      this.email = sessionStorage.getItem("username");

    this.service.getUserByEmail(this.email).subscribe((data: User) => {
      this.username = data.name;
    });
  }
  onCardClick(sportid) {
    this.route.navigate(["plans", sportid]);
  }
}
