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


  private baseUrl: string = environment.backendHost+"/job_applications";
  // private baseUrl: string = "http://localhost:8080/api/v1/job_applications";
  constructor(private http:HttpClient) {
  }

  applyToJob(jobApplicationRequest:JobApplicationRequest):Observable<JobApplicationResponse>{
    console.log(jobApplicationRequest)
    //TODO: WHEN I SEND DATA TO BACKEND I THE OBJECT IS NULL AND NOT VALIDATED ??
    //TODO:CONVERT TO FORM DATA TO SEND FILE

    const formData: FormData = new FormData();
    formData.append('name',jobApplicationRequest.name)
    formData.append('lastName',jobApplicationRequest.lastName)
    formData.append('email',jobApplicationRequest.email)
    formData.append('phone',jobApplicationRequest.phone)
    //TODO: ADD RESUME TO FORM DATA
    // formData.append('resume',jobApplicationRequest.resume)
    formData.append('coverLetter',jobApplicationRequest.coverLetter)
    formData.append('address',jobApplicationRequest.address)
    formData.append('education',jobApplicationRequest.education)
    formData.append('experience',jobApplicationRequest.experience)
    formData.append('educationLevel',jobApplicationRequest.educationLevel.toString())
    formData.append('jobOfferId',jobApplicationRequest.jobOfferId.toString())



    return this.http.post(this.baseUrl,formData) as Observable<JobApplicationResponse>
  }
}
