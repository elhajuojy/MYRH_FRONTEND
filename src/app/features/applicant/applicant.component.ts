import { Component } from '@angular/core';
import {ApplicantService} from "../../service/applicant/applicant.service";

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {


  constructor(private applicantService:ApplicantService) {
  }



}
