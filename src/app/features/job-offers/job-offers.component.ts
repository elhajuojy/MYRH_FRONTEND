import {Component, OnInit} from '@angular/core';
import {JobOffersStore} from "../../store/job-offer.store";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css'],
})
export class JobOffersComponent  implements OnInit{
  number_offer:number =  12200;
  title = 'my-rh-ng';
  vm$ = this.jobOfferStore.vim$
  constructor(private jobOfferStore:JobOffersStore) {
  }

  ngOnInit(): void {
        // this.jobOfferStore.getNbrOffers();
    }

  addMoreOfferJobsNbr() {
    this.jobOfferStore.addNberOfJobOffers();

  }
}
