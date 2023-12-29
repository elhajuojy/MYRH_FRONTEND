import {Component, OnInit} from '@angular/core';
import {JobOffersStore} from "../../store/job-offer.store";

@Component({
  selector: 'app-job-offer-detail',
  templateUrl: './job-offer-detail.component.html',
  styleUrls: ['./job-offer-detail.component.css'],
})
export class JobOfferDetailComponent implements  OnInit{
  vm$ = this.jobOfferStore.vim$
  nbr!:number

  //TODO : GET ID FROM ROUTING


  constructor(private jobOfferStore:JobOffersStore) {
  }

  ngOnInit(): void {
    // this.jobOfferStore.getNbrOffers();

  }
}
