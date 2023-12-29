import {Component, Input, OnInit} from '@angular/core';
import {JobOfferResponse} from "../../interfaces/jobOffer.model";

@Component({
  selector: 'app-job-offer-card',
  templateUrl: './job-offer-card.component.html',
  styleUrls: ['./job-offer-card.component.css']
})
export class JobOfferCardComponent implements OnInit{


  @Input() showAdminOptions:boolean = false;
  @Input() number!: number;
  @Input() jobOffer!:JobOfferResponse

  ngOnInit(): void {
    console.log(this.number);
  }

  deleteJobOffer(id: number) {
    console.log(id)
  }

  editJobOffer(id: number) {
    console.log(id)
  }

  showJobOffer(id: number) {
    console.log(id)
  }
}
