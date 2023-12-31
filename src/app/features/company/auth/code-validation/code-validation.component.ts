import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyService} from "../../../../service/company/company.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ToastService} from "angular-toastify";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'company-code-validation',
  templateUrl: './code-validation.component.html',
  styleUrls: ['./code-validation.component.css']
})
export class CodeValidationComponent {


  formCodeValidation:FormGroup = new FormGroup({
    code: new FormControl('', Validators.required),
  });


  constructor(
    private companyService:CompanyService, private router:ActivatedRoute, private route:Router,
    private _toastService: ToastService
  ) {}


  handleCodeVerification(event:FormGroup) {
    console.log(event.value.code)
    //:CODE AND THE EMAIL IS ALREADY ON THE URL PARAMS
    let login:string = this.router.snapshot.queryParams["login"]
    this.companyService.verifyCodeValidation(login,event.value.code).subscribe({
      next:(data)=> {
        console.log(data)
        if (data) {
          this.route.navigate(['companies/login'])
        }else {
          this._toastService.error(`Error: Invalid code`)
        }
      },
      error:(error)=>{
        //TODO: SHOW ERROR MESSAGE
        console.log(error)
        this._toastService.error(`Error: ${error.error.message}`)

      }
    })


  }
  handleResendCode() {
    this.companyService.sendCodeValidation(this.router.snapshot.queryParams["login"]).subscribe({
      next:(data)=>{
        console.log(data)
        this._toastService.success(`Code was sent to your email`)
      },
      error:(error)=>{
        console.log(error)
        this._toastService.error(`Error: ${error.error.message}`)
      }
    })

  }
}
