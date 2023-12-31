import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyService} from "../../../../service/company/company.service";
import {error} from "@angular/compiler-cli/src/transformers/util";


@Component({
  selector: 'company-code-validation',
  templateUrl: './code-validation.component.html',
  styleUrls: ['./code-validation.component.css']
})
export class CodeValidationComponent {


  constructor(
    private companyService:CompanyService,
    private router:ActivatedRoute,
    private route:Router
              ) {
  }
  handleCodeVerification(event:any) {
    console.log(event.target.value)
    //:CODE AND THE EMAIL IS ALREADY ON THE URL PARAMS
    let login:string = this.router.snapshot.queryParams["login"]
    this.companyService.verifyCodeValidation(login,event.target.value).subscribe({
      next:(data)=> {
        console.log(data)
        if (data) {
          this.route.navigate(['companies/login'])
        }
      },
      error:(error)=>{
        //TODO: SHOW ERROR MESSAGE
        console.log(error)
      }
    })


  }





}
