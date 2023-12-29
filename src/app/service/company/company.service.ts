import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {CompanyRequest, CompanyRequestAuth, CompanyResponse} from "../../interfaces/Company.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = environment.backendHost+"/companies";

  constructor(
    private http:HttpClient
  ) { }

  getAllCompanies():Observable<Array<CompanyResponse>>{
    return this.http.get(this.baseUrl) as Observable<Array<CompanyResponse>>
  }
  addNewCompany(company: CompanyRequest):Observable<CompanyResponse> {
    return this.http.put(this.baseUrl, company) as Observable<CompanyResponse>;
  }

  authentication(companyCredential :CompanyRequestAuth): Observable<CompanyResponse> {
    return this.http.put(this.baseUrl,companyCredential) as Observable<CompanyResponse>
  }

  sendCodeValidation(email:string):Observable<boolean>{
    return this.http.get(this.baseUrl+`/sendCodeValidation/${email}`) as Observable<boolean>
  }

  verifyCodeValidation(login:string , code:string):Observable<boolean>{
    return this.http.get(this.baseUrl+`/verifyCodeValidation/${login}/${code}`) as Observable<boolean>
  }
}
