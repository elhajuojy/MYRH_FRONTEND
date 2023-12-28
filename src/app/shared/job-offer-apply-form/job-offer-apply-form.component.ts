import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-job-offer-apply-form',
  templateUrl: './job-offer-apply-form.component.html',
  styleUrls: ['./job-offer-apply-form.component.css']
})
export class JobOfferApplyFormComponent {

  jobOfferApplyFrom:FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    cv: new FormControl('', Validators.required),
    coverLetter: new FormControl('', Validators.required),


    })

  handleApplaySubmit(form:FormGroup) {
    console.log(form.value)
  }
}
