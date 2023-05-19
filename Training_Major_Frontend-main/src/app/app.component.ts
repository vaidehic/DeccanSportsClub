import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { AuthenticationService } from "./shared/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sport-club";
  userrole: Observable<String>;
  username: Observable<String>;
  constructor(
    private as: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  logout() {
    this.as.logout();
    this.toastr.success("Logout Successfully !!", "", { timeOut: 1000 });
    this.router.navigate(["login"]);
  }
  ngOnInit() {
    if (localStorage.getItem("isRemember") == "true") {
      this.userrole = this.as.userrole;
      this.username = this.as.username;
    } else {
      this.userrole = this.as.userrole1;
      this.username = this.as.username1;
    }
  }
  isLogged() {
    return this.as.isUserLoggedIn();
  }
}
