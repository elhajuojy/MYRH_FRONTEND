import { Injectable } from '@angular/core';
import {Observable, Observer} from "rxjs";
import {ApplicantResponse} from "../../interfaces/applicant.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  private baseUrl: string = environment.backendHost+"/applicants";
  constructor(
    private http:HttpClient
  ) { }

  authenticateApplicant(email:String,password:String):Observable<ApplicantResponse> {
    console.log(email,password)
    return this.http.get(this.baseUrl+`/auth/${email}/${password}`) as Observable<ApplicantResponse>;
  }
}
