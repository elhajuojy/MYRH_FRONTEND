import { Component } from '@angular/core';
import {JobOfferResponse} from "../../../interfaces/jobOffer.model";
import {JobOfferService} from "../../../service/job-offer/job-offer.service";

@Component({
  selector: 'admin-job-offers',
  templateUrl: './admin-job-offers.component.html',
  styleUrls: ['./admin-job-offers.component.css']
})
export class AdminJobOffersComponent {

  jobOffers:JobOfferResponse[] = []


  constructor(private jobOfferService:JobOfferService) {
  }

  ngOnInit(): void {

    let params = new Map<string, string>()
    params.set("size","5");
    // params.set("visibility","false");
    // params.set("page","0");
    this.jobOfferService.getAllJobOffers(params).subscribe({
      next:(data)=>{
        this.jobOffers=data.content;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}
