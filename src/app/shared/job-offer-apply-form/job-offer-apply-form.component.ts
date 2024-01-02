import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {JobApplicationRequest} from "../../interfaces/JobApplicant";
import {EducationLevel} from "../../interfaces/EducationLevel.enums";
import {JobApplicationService} from "../../service/job-applicantion/job-application.service";
import {ToastService} from "angular-toastify";
import {timeInterval} from "rxjs";

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


  constructor(
    private router:ActivatedRoute ,
    private jobApplicationService:JobApplicationService,
    private _toastService: ToastService,
    private route:Router
  ) {

  }

  ngOnInit(): void {

    this.jobOfferId = this.router.snapshot.params["id"];
  }
  handelFileInput(event:any) {

    this.jobOfferApplyFrom.value.resume = event.target.files[0];
    console.log(this.jobOfferApplyFrom.value.resume)
    console.log(typeof this.jobOfferApplyFrom.value.resume)
  }
  handleApplaySubmit(form:FormGroup,event:any) {
    //ADD jobOfferId: this.jobOfferId = this.router.snapshot.params["id"] to the form
    form.value.jobOfferId = this.jobOfferId ? this.router.snapshot.params["id"] : -1;
    form.value.resume = this.jobOfferApplyFrom.value.resume;

    //: SEND DATA TO BACKEND WITH ID OF JOB OFFER WHICH BE INCLUDED ON THE URL PARAMS
    if (form.invalid) {
      throw new Error("Form is invalid")
    }
    if (this.jobOfferId == null) {
      throw new Error("Job offer id is null")
    }

    const jobApplicationRequest: JobApplicationRequest = form.value as JobApplicationRequest;
    console.log(jobApplicationRequest)
    //: WHEN I SEND DATA TO BACKEND I THE OBJECT IS NULL AND NOT VALIDATED ??
    this.jobApplicationService.applyToJob(jobApplicationRequest).subscribe(
      {
        next: (data) => {
          console.log(data)
          this._toastService.success("Your application has been sent successfully")
          setTimeout(() => {
              this.route.navigate(['job_offers']).then(r => console.log(r));
          }, 1500);
        },
        error: (error) => {
          console.log(error)
          this.errorObjectFromBackend = error;
          this.error = error.error.message;
        }
      }
    );
  }
}
