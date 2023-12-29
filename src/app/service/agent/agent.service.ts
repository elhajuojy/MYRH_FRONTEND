import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JobOfferChangeVisibilityRequest, JobOfferResponse} from "../../interfaces/jobOffer.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private baseUrl: string = environment.backendHost+"/agents";
  constructor(
    private http:HttpClient
  ) { }


  changeJobOfferVisibility(jobOfferChangeVisibilityRequest:JobOfferChangeVisibilityRequest):Observable<JobOfferResponse>{
    return this.http.post(this.baseUrl+"/job_offers",
      jobOfferChangeVisibilityRequest) as Observable<JobOfferResponse>
  }

}
