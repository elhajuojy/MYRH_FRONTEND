import {Component, Input} from '@angular/core';
import {JobOfferApplicationsPageResponse} from "../../interfaces/jobOffer.model";

@Component({
  selector: 'app-job-offer-application-card',
  templateUrl: './job-offer-application-card.component.html',
  styleUrls: ['./job-offer-application-card.component.css']
})
export class JobOfferApplicationCardComponent {

  @Input() jobOfferApplication!:JobOfferApplicationsPageResponse;

}
