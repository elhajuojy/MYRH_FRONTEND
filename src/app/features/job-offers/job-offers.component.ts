import {Component, OnInit} from '@angular/core';
import {JobOffersStore} from "../../store/job-offer.store";
import {JobOfferService} from "../../service/job-offer/job-offer.service";
import {JobOfferResponse} from "../../interfaces/jobOffer.model";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css'],
})
export class JobOffersComponent  implements OnInit{
  jobOffers:JobOfferResponse[] = []
  message:string=''
  title = 'my-rh-ng';
  vm$ = this.jobOfferStore.vim$
  constructor(private jobOfferStore:JobOffersStore, private jobOfferService:JobOfferService) {
  }

  ngOnInit(): void {
        // this.jobOfferStore.getNbrOffers();
   let params  = new Map<string, string>() ;
   params.set("page","0");
   // params.set("size","10");
   // params.set("title","job-3");
   // params.set("education","BAC-5");
   // params.set("location","casablanca");
   this.jobOfferService.getAllJobOffers(params).subscribe({
     next:(data)=>{
       this.jobOffers=data.content;

    },
     error:(error)=>{
       this.message = error.message;
     }
   });


  }


  addMoreOfferJobsNbr() {
    this.jobOfferStore.addNberOfJobOffers();

  }
}
