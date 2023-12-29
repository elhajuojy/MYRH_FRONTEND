import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {JobApplicationRequest, JobApplicationResponse} from "../../interfaces/JobApplicant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {


  private baseUrl: string = environment.backendHost+"/job_applications";
  constructor(private http:HttpClient) {
  }

  applyToJob(jobApplicationRequest:JobApplicationRequest):Observable<JobApplicationResponse>{
    return this.http.post(this.baseUrl,jobApplicationRequest) as Observable<JobApplicationResponse>
  }
}
