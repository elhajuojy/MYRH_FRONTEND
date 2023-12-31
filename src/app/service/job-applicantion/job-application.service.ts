import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {JobApplicationRequest, JobApplicationResponse} from "../../interfaces/JobApplicant";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {


  // private baseUrl: string = environment.backendHost+"/job_applications";
  private baseUrl: string = "http://localhost:8080/api/v1/job_applications";
  constructor(private http:HttpClient) {
  }

  applyToJob(form:FormGroup):Observable<JobApplicationResponse>{
    console.log(form.value)
    //TODO: WHEN I SEND DATA TO BACKEND I THE OBJECT IS NULL AND NOT VALIDATED ??
    const headers = {
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type,x-requested-with,xmlhttprequest',
      'Access-Control-Allow-Request': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',

    }
    return this.http.post(this.baseUrl,form.value,{headers}) as Observable<JobApplicationResponse>
  }
}
