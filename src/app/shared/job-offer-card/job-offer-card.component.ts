import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-job-offer-card',
  templateUrl: './job-offer-card.component.html',
  styleUrls: ['./job-offer-card.component.css']
})
export class JobOfferCardComponent {

  @Input() showAdminOptions:boolean = false;

  deleteJobOffer() {

  }

  editJobOffer() {

  }

  showJobOffer() {

  }
}
