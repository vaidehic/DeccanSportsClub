import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-registerprofile",
  templateUrl: "./registerprofile.component.html",
  styleUrls: ["./registerprofile.component.scss"],
})
export class RegisterprofileComponent implements OnInit {
  userid: number;

  constructor(private user: UserService, private router: Router) {}

  ngOnInit() {}

  submit(profileForm) {
    this.userid = parseInt(sessionStorage.getItem("userid"));

    this.user.addProfile(profileForm.value, this.userid).subscribe((data) => {
      this.router.navigate(["myprofile"]);
    });
  }
}
