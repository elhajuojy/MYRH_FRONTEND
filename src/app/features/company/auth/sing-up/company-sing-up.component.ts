import { Component } from '@angular/core';
import {CompanyService} from "../../../../service/company/company.service";

@Component({
  selector: 'sing-up-company',
  templateUrl: './company-sing-up.component.html',
  styleUrls: ['./company-sing-up.component.css']
})
export class CompanySingUpComponent {


  constructor(private companyService:CompanyService) {
  }

  onSingUpSubmit(form:any):void{
    //
  }
}
