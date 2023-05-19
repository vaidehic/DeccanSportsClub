import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  data: any;
  url = "http://172.27.59.174:8083/admin/";
  baseUrl = "http://172.27.59.174:8083/";
  token = sessionStorage.getItem("token");
  headers_object = new HttpHeaders().set(
    "Authorization",
    "Bearer " + this.token
  );
  constructor(private http: HttpClient) {}

  //to get all sports
  getAllSports() {
    return this.http.get(this.url + "sport", {
      headers: this.headers_object,
    });
  }

  //to add sport
  addSport(image: File, value: any) {
    const newform = new FormData();
    newform.append("file", image);
    newform.append("sportName", value.sportName);
    return this.http.post("http://172.27.59.174:8083/admin/image", newform);
  }

  //delete sport by id
  deleteSport(sportId: number): Observable<Object> {
    return this.http.delete(this.url + sportId);
  }

  //to get all Managers
  getManagers(): Observable<Object[]> {
    return this.http.get<Object[]>(this.baseUrl + "admin/managers");
  }

  //get  manager  by id
  getManager(id: number) {
    return this.http.get(this.baseUrl + "admin/manager/" + id);
  }

  //To add Manager
  addManager(id: number, user: any) {
    return this.http.post(this.baseUrl + "admin/addmanager/" + id, user);
  }

  //To update Manager
  updateManager(
    managerId: number,
    sportId: number,
    user: any
  ): Observable<Object> {
    return this.http.put(
      this.baseUrl + "admin/updatemanager/" + managerId + "/" + sportId,
      user
    );
  }

  //To delete Manager
  deleteManager(id: number): Observable<Object> {
    return this.http.delete(this.baseUrl + "admin/deletemanager/" + id);
  }

  //To update Manager(Unlocking manager account)
  unlock(email: string, password: string) {
    var user = {
      email: email,
      password: password,
    };
    return this.http.put(this.baseUrl + "admin/unlock", user);
  }

  RequestForUnlock() {
    return this.http.get(this.baseUrl + "admin/requestUnlock");
  }

  //get sport for update
  getSportById(sportid: number): Observable<Object> {
    return this.http.get(this.baseUrl + "admin/sports/" + sportid);
  }

  //Update sport by id
  updateSport(id: number, sportImage: File, value: any) {
    const newform = new FormData();
    newform.append("file", sportImage);
    newform.append("sportName", value.sportName);
    return this.http.put(this.baseUrl + "admin/sport/" + id, newform);
  }
}
