import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from "../../../../service/company/company.service";
import {CompanyRequest} from "../../../../interfaces/Company.model";
import {Router} from "@angular/router";

@Component({
  selector: 'sing-up-company',
  templateUrl: './company-sing-up.component.html',
  styleUrls: ['./company-sing-up.component.css']
})
export class CompanySingUpComponent implements OnInit{
  signUpForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),

  });


  constructor(
    private companyService:CompanyService,
    private router:Router

  ) {
  }

  ngOnInit(): void {

  }

  onSingUpSubmit(form:FormGroup):void{

    const companyRequest:CompanyRequest = this.signUpForm.value as CompanyRequest
    //TODO: ADD NEW COMPANY TO BACKEND
    this.companyService.addNewCompany(companyRequest).subscribe({
      next:(data)=>{
        console.log(data)
        //TODO: REDIRECT TO CODE VERIFICATION PAGE WITH EMAIL
        this.router.navigate(['companies/code_validation'], {
          queryParams: { login: data.login } });
      },
      error:(error)=>{
        console.log(error)
      }
    })

  }
}
