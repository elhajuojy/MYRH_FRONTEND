import { Component } from '@angular/core';
import {ApplicantService} from "../../../../service/applicant/applicant.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";
import {transition} from "@angular/animations";

@Component({
  selector: 'app-applicant-login',
  templateUrl: './applicant-login.component.html',
  styleUrls: ['./applicant-login.component.css']
})
export class ApplicantLoginComponent {


  loginForm:FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private applicantService:ApplicantService,
              private _toastService: ToastService,
              private router :Router
              ) {
  }

  randomIntFromInterval(number: number, number2: number) {
    return Math.floor(Math.random() * (number2 - number + 1) + number);
  }
  onLoginSubmit(form:FormGroup):void{
    //TODO: applicant can take login by email and password to Marocannonces site for displaying job offers
    //RANDOM NUMBER PLEASE
    console.log(
      this.randomIntFromInterval(100000,999999)
    )



    this.applicantService.authenticateApplicant(form.value.email,form.value.password).subscribe((data:any)=>{
      console.log(data)
      //TODO : MAKE GLOBAL STORE TO SAVE THE APPLICANT DATA AND USE IT IN THE WHOLE APP
      this.router.navigate(['/job_offers'])
        this._toastService.success("Your application has been sent successfully");

    },(error:any)=>{
        console.log(error)
        this._toastService.error(error.error.message);
      }
      );
  }


  protected readonly transition = transition;
}
