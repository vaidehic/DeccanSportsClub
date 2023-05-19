import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class ManagerService {
  private baseURL = "http://172.27.59.174:8083/";
  constructor(private http: HttpClient) {}

  //to get all batches by managerId
  getBatchesByManager(managerId: number): Observable<Object[]> {
    return this.http.get<Object[]>(
      this.baseURL + "manager/batchesbymanager/" + managerId
    );
  }

  //get one batch
  getBatch(id: number) {
    return this.http.get(this.baseURL + "manager/batches/" + id);
  }

  // get batches by sportId
  getAllBatchesBySport(id: number) {
    return this.http.get(this.baseURL + "manager/batch/" + id);
  }

  //get batches by managerId
  getAllSportsByManager(managerId: number) {
    return this.http.get(this.baseURL + "manager/sports/" + managerId);
  }

  //to add a batch
  addBatch(id: number, batch: any) {
    return this.http.post(this.baseURL + "manager/batch/" + id, batch);
  }

  //to update a batch
  updateBatch(batchId: number, sportId: number, batch: any) {
    return this.http.put(
      this.baseURL + "manager/batch/" + batchId + "/" + sportId,
      batch
    );
  }

  //to delete a batch
  deleteBatch(id: number): Observable<Object> {
    return this.http.delete(this.baseURL + "manager/batch/" + id);
  }

  //get specific plan
  getPlan(id: number): Observable<Object[]> {
    return this.http.get<Object[]>(this.baseURL + "manager/plan/" + id);
  }

  //get plans according to the manager
  getPlansByManager(managerId: number): Observable<Object[]> {
    return this.http.get<Object[]>(
      this.baseURL + "manager/listplan/" + managerId
    );
  }

  //to delete a plan
  deletePlan(id: number): Observable<Object> {
    return this.http.delete(this.baseURL + "manager/plan/" + id);
  }

  //get all plans
  getAllPlan(): Observable<Object[]> {
    return this.http.get<Object[]>(this.baseURL + "manager/plans");
  }

  //add new plan/offer
  addPlan(id: number, plan: any) {
    return this.http.post(this.baseURL + "manager/plan/" + id, plan);
  }

  //update particular plan
  updatePlan(planId: number, sportId: number, plan: any): Observable<Object> {
    return this.http.put(
      this.baseURL + "manager/plan/" + planId + "/" + sportId,
      plan
    );
  }
  //get all enrollments by manager for approve/reject
  getEnrollmentsByManager(managerId: number): Observable<Object[]> {
    return this.http.get<Object[]>(
      this.baseURL + "manager/enrollments/" + managerId
    );
  }

  //get enrollment by id
  getEnrollmentById(id: number): Observable<Object[]> {
    return this.http.get<any[]>(this.baseURL + "manager/enrollment/" + id);
  }

  // to reject the user without reason
  rejectUser(id: number): Observable<Object> {
    return this.http.delete(this.baseURL + "manager/reason/" + id);
  }

  //to accept user
  acceptUser(enrollmentId: number, batchId: number): Observable<Object> {
    return this.http.get(
      this.baseURL + "manager/enrollment/" + enrollmentId + "/" + batchId
    );
  }

  getSportForReport(): Observable<Object[]> {
    return this.http.get<Object[]>(this.baseURL + "manager/sports");
  }

  getSportcountReport(): Observable<Object[]> {
    return this.http.get<Object[]>(this.baseURL + "manager/count");
  }

  getPlanReport(): Observable<Object[]> {
    return this.http.get<Object[]>(this.baseURL + "manager/planreport");
  }

  getEnrollmentReport(): Observable<Object[]> {
    return this.http.get<Object[]>(this.baseURL + "manager/enrollmentreport");
  }
}
