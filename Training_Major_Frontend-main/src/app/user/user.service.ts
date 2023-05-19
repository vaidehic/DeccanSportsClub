import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  

  data: any;
  url = "http://172.27.59.174:8083/users/";
  baseUrl = "http://172.27.59.174:8083/admin/";
  token = sessionStorage.getItem("token");

  headers_object = new HttpHeaders().set(
    "Authorization",
    "Bearer " + this.token
  );

  constructor(private http: HttpClient) {}

  getAllSports() {
    console.log(this.headers_object);
    return this.http.get(this.url + "sports", {
      headers: this.headers_object,
    });
  }

  getSportForManager() {
    console.log(this.headers_object);
    return this.http.get(this.baseUrl + "SportForManager", {
      headers: this.headers_object,
    });
  }
  getUserByEmail(emailId) {
    return this.http.get(this.url + "email/" + emailId);
  }

  getSportById(sportid: number) {
    return this.http.get(this.url + "sports/" + sportid);
  }

  UserEnrollments(userId) {
    return this.http.get(this.url + "enrollment/" + userId);
  }

  addProfile(value: any,userId:number) {
    console.log("************")
    console.log(value)
    console.log(userId)
    return this.http.post(this.url+"addprofile/"+userId,value);
  }

  getProfile(userId:number){
    return this.http.get(this.url + "userprofile/"+userId);
  }

  addEnrollment(
    userId,
    sportId,
    planId,
    amountPaid,
    planStartDate,
    planEndDate
  ) {
    console.log("in service");

    let form = new FormData();
    form.append("userId", userId);
    form.append("sportId", sportId);
    form.append("planId", planId);
    form.append("amountPaid", amountPaid);
    form.append("planStartDate", planStartDate);
    form.append("planEndDate", planEndDate);
    return this.http.post(this.url + "addenrollment", form);
  }

  renewMembership(enrollmentId) {
    return this.http.post(this.url + "renew", enrollmentId);
  }
  addComment(comment, userId, planId) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.post(
      this.url + "comments/" + userId + "/" + planId,
      JSON.stringify(comment),
      httpOptions
    );
  }
  getCommentsByPlanId(planid: number) {
    return this.http.get(this.url + "comments/" + planid, {
      observe: "response",
    });
  }
  deleteComment(commentId: number) {
    return this.http.delete(this.url + "comments/" + commentId);
  }
  planLikeByUser(userId: number, planId: number) {
    return this.http.post(this.url + "like/" + userId + "/plan/" + planId, "");
  }
  planDislikeByUser(userId: number, planId: number) {
    return this.http.post(
      this.url + "dislike/" + userId + "/plan/" + planId,
      ""
    );
  }
  getAllPlanLikedByUser(userId: number) {
    return this.http.get(this.url + "plan/user/" + userId);
  }
  getAllPlanDislikedByUser(userId: number) {
    return this.http.get(this.url + "plan/user/dislike/" + userId);
  }
}
