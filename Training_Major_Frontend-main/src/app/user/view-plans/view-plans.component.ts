import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { UserService } from "../user.service";
import { Comments } from "./Comments";
import { Plan } from "./plan";
import { User } from "./User";

@Component({
  selector: "app-view-plans",
  templateUrl: "./view-plans.component.html",
  styleUrls: ["./view-plans.component.scss"],
})
export class ViewPlansComponent implements OnInit {
  sportid: number;
  userid: number;
  user: User;
  planid: number;
  plans: Plan;
  sportName: String;
  sportImage: File;
  commentClick: Boolean = false;
  comments: Comments[];
  display = "none";
  email: string;
  likedPlan: [];
  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("isRemember") == "true")
      this.userid = parseInt(localStorage.getItem("userid"));
    else this.userid = parseInt(sessionStorage.getItem("userid"));

    this.email = sessionStorage.getItem("username");
    this.service.getUserByEmail(this.email).subscribe((data: User) => {
      this.user.email = data.email;
      this.user.name = data.name;
    });
    this.getPlanLikedByUser(this.userid);
    // getting sport id from parameter
    this.route.paramMap.subscribe((response) => {
      this.sportid = parseInt(response.get("sportid"));

      //fetching sport based on sportid
      this.service.getSportById(this.sportid).subscribe((response: any) => {
        // assigning sport name
        this.sportImage = response.sportImage;
        this.sportName = response.sportName;
        // assigning plan rest details
        this.plans = response.plan;
      });
    });
  }

  //add enrollment
  addEnrollment(planId, planFees, planStartDate, planEndDate) {
    this.service
      .addEnrollment(
        this.userid,
        this.sportid,
        planId,
        planFees,
        planStartDate,
        planEndDate
      )
      .subscribe((res: any) => {
        if (res != null) {
          this.toastr.success(
            "We will reach you shortly","Enrollment request has been submitted successfully !!",
            { timeOut: 3000 }
          );
          this.router.navigate(["userenrollments"]);
        } else {
          this.toastr.success("something wrong !!", "", { timeOut: 1000 });
        }
      });
  }

  // on comment click variable changes to true
  onCommentClick(planId) {
    this.planid = planId;
    //getting plan by plan id
    this.service.getCommentsByPlanId(planId).subscribe((response: any) => {
      this.comments = response.body;
    });
  }
  //adding comment
  onClick(commentvalue) {
    this.service
      .addComment(commentvalue.value, this.userid, this.planid)
      .subscribe((response) => {
        this.onCommentClick(this.planid);
      });
  }
  //delete comment
  deleteComment(commentId) {
    this.service.deleteComment(commentId).subscribe((response) => {
      this.onCommentClick(this.planid);
    });
  }
  // on click of like
  onLikeClick(planid) {
    this.service
      .planLikeByUser(this.userid, planid)
      .subscribe((response: any) => {
        //this.likeStatus = response.likeStatus;
        this.ngOnInit();
      });
  }
  // on click of dislike
  onDislikeClick(planid) {
    this.service
      .planDislikeByUser(this.userid, planid)
      .subscribe((response: any) => {
        this.ngOnInit();
      });
  }

  // getting all plans liked by user
  getPlanLikedByUser(userid) {
    this.service.getAllPlanLikedByUser(userid).subscribe((data: any) => {
      this.likedPlan = data;
    });
  }
  // checking if user has liked this post already
  checkLikeStatus(planId) {
    let currentPost: boolean = false;
    for (let index = 0; index < this.likedPlan.length; index++) {
      let element: any = this.likedPlan[index];
      if (element.planId === planId && element.likeStatus === true) {
        currentPost = true;
      }
    }
    if (currentPost) {
      return true;
    } else {
      return false;
    }
  }
  // checking if user has liked this post already
  checkDisLikeStatus(planId) {
    let currentPost: boolean = false;
    for (let index = 0; index < this.likedPlan.length; index++) {
      let element: any = this.likedPlan[index];
      if (element.planId === planId && element.likeStatus === false) {
        currentPost = true;
      }
    }
    if (currentPost) {
      return true;
    } else {
      return false;
    }
  }
}
