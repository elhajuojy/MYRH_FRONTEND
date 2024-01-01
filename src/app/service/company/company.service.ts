import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {CompanyRequest, CompanyRequestAuth, CompanyResponse} from "../../interfaces/Company.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JobOfferResponse} from "../../interfaces/jobOffer.model";

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
    console.log(company)

    const form:FormData= new FormData();
    form.append('name',company.name)
    form.append('address',company.address)
    form.append('description',company.description)
    form.append('email',company.email)
    //TODO: ADD IMAGE TO FORM DATA
    // form.append('image',company.image)
    form.append('login',company.login)
    form.append('password',company.password)
    form.append('phoneNumber',company.phoneNumber)
    form.append('website',company.website)

    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundaryZXO5tfypi1oMYtxu;charset=UTF-8'
    });

    return this.http.post(this.baseUrl, form,
      // {
      //   headers: headers
      // }
      ) as Observable<CompanyResponse>;
  }

  authentication(companyCredential :CompanyRequestAuth): Observable<CompanyResponse> {
    return this.http.post(this.baseUrl,companyCredential) as Observable<CompanyResponse>
  }

  sendCodeValidation(email:string):Observable<boolean>{
    return this.http.get(this.baseUrl+`/sendCodeValidation/${email}`) as Observable<boolean>
  }

  verifyCodeValidation(login:string , code:string):Observable<boolean>{
    return this.http.get(this.baseUrl+`/verifyCodeValidation/${login}/${code}`) as Observable<boolean>
  }
}
