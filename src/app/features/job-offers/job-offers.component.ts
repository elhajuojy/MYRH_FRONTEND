import {Component, OnDestroy, OnInit} from '@angular/core';
import {JobOffersStore} from "../../store/job-offer.store";
import {JobOfferService} from "../../service/job-offer/job-offer.service";
import {JobOfferResponse} from "../../interfaces/jobOffer.model";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ToastService} from "angular-toastify";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css'],
})
export class JobOffersComponent  implements OnInit, OnDestroy{
  jobOffers:JobOfferResponse[] = []
  message:string=''
  title = 'my-rh-ng';
  vm$ = this.jobOfferStore.vim$
  totalPages: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;
  paramsSubscription:Subscription = new Subscription();
  constructor(
    private jobOfferStore:JobOffersStore,
    private jobOfferService:JobOfferService,
    private _toastService: ToastService,
    private router :Router,
    private activatedRoute:ActivatedRoute) {
  }

  ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
  }

  // onPageChange(page:number){
  //   this.getJobOffers(page);
  // }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe(params => {
        console.log(params)
        this.getJobOffers(
          params
        );
    }
    )
  }

  getJobOffers(_params:Params = {}){

    let params  = new Map<string, string>() ;
    params.set("size","3");
    params.set("visibility","true");
    for (let key in _params) {
      params.set(key,_params[key]);
    }

    this.jobOfferService.getAllJobOffers(params).subscribe({
      next:(data)=>{
        this.jobOffers=data.content;
        this.totalPages = data.totalPages;
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
