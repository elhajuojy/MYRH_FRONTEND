import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {JobApplicationRequest} from "../../interfaces/JobApplicant";
import {EducationLevel} from "../../interfaces/EducationLevel.enums";
import {JobApplicationService} from "../../service/job-applicantion/job-application.service";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-job-offer-apply-form',
  templateUrl: './job-offer-apply-form.component.html',
  styleUrls: ['./job-offer-apply-form.component.css']
})
export class JobOfferApplyFormComponent implements OnInit {
  jobOfferId!:string;
  error!:string;
  errorObjectFromBackend!:any;

  educationLevels = Object.keys(EducationLevel).filter(key => isNaN(Number(key)));

  jobOfferApplyFrom:FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    resume: new FormControl('', Validators.required),
    coverLetter: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
    educationLevel: new FormControl( EducationLevel.BAC, Validators.required ),
    jobOfferId: new FormControl(this.router.snapshot.params["id"] ),
  })


  constructor(private router:ActivatedRoute , private jobApplicationService:JobApplicationService,private _toastService: ToastService) {

  }

  ngOnInit(): void {

    this.jobOfferId = this.router.snapshot.params["id"];
    console.log(this.jobOfferId)
  }
  handleApplaySubmit(form:FormGroup) {
    //ADD jobOfferId: this.jobOfferId = this.router.snapshot.params["id"] to the form
    form.value.jobOfferId = this.jobOfferId  ? this.router.snapshot.params["id"] : -1 ;

    console.log(form.value)
    //: SEND DATA TO BACKEND WITH ID OF JOB OFFER WHICH BE INCLUDED ON THE URL PARAMS
    if (form.invalid) {
      throw new Error("Form is invalid")
    }
    if (this.jobOfferId == null) {
      throw new Error("Job offer id is null")
    }

    //TODO: WHEN I SEND DATA TO BACKEND I THE OBJECT IS NULL AND NOT VALIDATED ??

    //OLD WAY TO SEND DATA TO BACKEND
    // let jobOfferApplication:JobApplicationRequest  = {
    //   lastName: form.value.lastName,
    //   name : form.value.name,
    //   phone: form.value.phone,
    //   email: form.value.email,
    //   address: form.value.address,
    //   education: form.value.education,
    //   experience: form.value.experience,
    //   educationLevel: form.value.educationLevel,
    //   resume: form.value.resume,
    //   coverLetter: form.value.coverLetter,
    //   jobOfferId: this.jobOfferId as unknown as number
    // }
    this.jobApplicationService.applyToJob(form).subscribe(
      (response)=>{
        console.log(response)
        this._toastService.success("Your application has been sent successfully");

      },
      (error)=>{
        console.log(error)
        this.error = error.error.message;
        this._toastService.error(error.error.message);
        this.errorObjectFromBackend = error.error.detials;

      }
    )
  }
}
