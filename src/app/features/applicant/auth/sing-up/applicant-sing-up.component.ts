import { Component } from '@angular/core';
import {CompanyService} from "../../../../service/company/company.service";

@Component({
  selector: 'sing-up-applicant',
  templateUrl: './applicant-sing-up.component.html',
  styleUrls: ['./applicant-sing-up.component.css']
})
export class ApplicantSingUpComponent {


  constructor(private companyService:CompanyService) {
  }

  onSingUpSubmit(form:any):void{
    //TODO I NEED TO USE HIS INFORMATION TO CREATE A NEW

  }

}

