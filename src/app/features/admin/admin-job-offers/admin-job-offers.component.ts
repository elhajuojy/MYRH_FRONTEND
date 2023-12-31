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
    this.jobOfferService.getAllJobOffers(new Map<string, string>()).subscribe({
      next:(data)=>{
        this.jobOffers=data.content;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}
