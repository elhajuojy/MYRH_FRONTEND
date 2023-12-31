import {Component, OnInit} from '@angular/core';
import {JobOffersStore} from "../../store/job-offer.store";
import {JobOfferService} from "../../service/job-offer/job-offer.service";
import {JobOfferResponse} from "../../interfaces/jobOffer.model";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ToastService} from "angular-toastify";
import {ActivatedRoute, Router} from "@angular/router";

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
  nbrOffers: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;
  constructor(
    private jobOfferStore:JobOffersStore,
    private jobOfferService:JobOfferService,
    private _toastService: ToastService,
    private router :Router,
    private activatedRoute:ActivatedRoute) {
  }

  onPageChange(page:number){
    this.getJobOffers(page);
  }

  ngOnInit(): void {
    this.getJobOffers();
  }

  getJobOffers(page:number=0){
    let params  = new Map<string, string>() ;
    params.set("page", page.toString());
    params.set("size","1");
    this.jobOfferService.getAllJobOffers(params).subscribe({
      next:(data)=>{
        this.jobOffers=data.content;
        this.nbrOffers = data.totalPages;
        this.pageSize = data.size;
        this.currentPage = data.number;
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
