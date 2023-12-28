import {Component, OnInit} from '@angular/core';
import {JobOffersStore} from "../../store/job-offer.store";

@Component({
  selector: 'app-job-offer-detail',
  templateUrl: './job-offer-detail.component.html',
  styleUrls: ['./job-offer-detail.component.css'],
  providers:[
    JobOffersStore
  ]
})
export class JobOfferDetailComponent implements  OnInit{
  vm$ = this.jobOfferStore.vim$
  nbr!:number


  constructor(private jobOfferStore:JobOffersStore) {
  }

  ngOnInit(): void {
    // this.jobOfferStore.getNbrOffers();
  }
}
