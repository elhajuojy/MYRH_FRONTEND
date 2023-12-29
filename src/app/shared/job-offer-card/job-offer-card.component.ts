import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-job-offer-card',
  templateUrl: './job-offer-card.component.html',
  styleUrls: ['./job-offer-card.component.css']
})
export class JobOfferCardComponent implements OnInit{


  @Input() showAdminOptions:boolean = false;
  @Input() number!: number;

  ngOnInit(): void {
    console.log(this.number);
  }
  deleteJobOffer() {

  }

  editJobOffer() {

  }

  showJobOffer() {

  }
}
