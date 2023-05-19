import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  baseUrl = "http://172.27.59.174:8083";
  constructor(private http: HttpClient) {}
  registerForm(registerform) {
    console.log(registerform);
    return this.http.post(this.baseUrl + "/users/register", registerform);
  }

  count(email) {
    console.log("service" + email);
    return this.http.post(this.baseUrl + "/users/count/" + email, {
      responseType: "text",
    });
  }

  requestForUnlockAccount(email) {
    return this.http.post(this.baseUrl + "/users/unlock/" + email, {
      responseType: "text",
    });
  }
  forgetPassword(email) {
    console.log("service" + email);
    return this.http.post(this.baseUrl + "/users/forgetpass", email);
  }
  verifyOtp(email, otp) {
    console.log("service" + email + " otp" + otp);
    return this.http.post(this.baseUrl + "/users/verifyotp/" + email, otp);
  }
  confirmPass(pass, email) {
    console.log("service" + email + " pass" + pass);
    return this.http.post(this.baseUrl + "/users/updatepass/" + email, pass);
  }
  changePassword(data, email) {
    console.log(data);
    let form = new FormData();
    form.append("oldpass", data.oldpass);
    form.append("newpass", data.newpass);
    form.append("email", email);
    return this.http.post(this.baseUrl + "/users/changePassword", form);
  }
}
