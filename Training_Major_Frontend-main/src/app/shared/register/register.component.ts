import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  mandatory: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(20)]],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: [
        "",
        [
          Validators.required,
          Validators.max(9999999999),
          Validators.min(1000000000),
        ],
      ],
      password: ["", [Validators.required, Validators.minLength(4)]],
    });
  }
  onSubmit() {
    if (this.registerForm.valid == true) {
      this.service
        .registerForm(this.registerForm.value)
        .subscribe((res: any) => {
          if (res != null) {
            this.toastr.success("Registration Successful !!", "", {
              timeOut: 1000,
            });
            this.router.navigate(["login"]);
          } else {
            this.toastr.success("Something wrong !!");
            this.router.navigate([""]);
          }
        });
    } else {
      this.mandatory = true;
    }
  }
}
