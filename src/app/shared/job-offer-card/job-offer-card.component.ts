import {Component, Input, OnInit} from '@angular/core';
import {JobOfferChangeVisibilityRequest, JobOfferResponse} from "../../interfaces/jobOffer.model";
import {JobOfferService} from "../../service/job-offer/job-offer.service";

@Component({
  selector: 'app-job-offer-card',
  templateUrl: './job-offer-card.component.html',
  styleUrls: ['./job-offer-card.component.css']
})
export class JobOfferCardComponent implements OnInit{


  @Input() showAdminOptions:boolean = false;
  @Input() number!: number;
  @Input() jobOffer!:JobOfferResponse
  @Input() isCompany!:boolean;

  constructor(private jobOfferService:JobOfferService) {
  }

  ngOnInit(): void {
  }

  deleteJobOffer(id: number) {
    console.log(id)
  }

  editJobOffer(id: number) {
    console.log(id)
  }

  showJobOffer(id: number) {
    let jobOfferChangeVisibility:JobOfferChangeVisibilityRequest = {
      jobOfferId:id.toString(), visibility:true
    }

    this.jobOfferService.changeJobOfferVisibility(jobOfferChangeVisibility).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(error)=>{
        console.log(error)
      }
    })

  }
}
