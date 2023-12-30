import {Component, OnDestroy, OnInit} from '@angular/core';
import {JobOffersStore} from "../../store/job-offer.store";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {JobOfferService} from "../../service/job-offer/job-offer.service";
import {JobOfferResponse} from "../../interfaces/jobOffer.model";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-job-offer-detail',
  templateUrl: './job-offer-detail.component.html',
  styleUrls: ['./job-offer-detail.component.css'],
})
export class JobOfferDetailComponent implements  OnInit , OnDestroy{
  vm$ = this.jobOfferStore.vim$
  nbr!:number
  id!:string
  paramsSubscription!:Subscription;
  jobOffer!:JobOfferResponse ;
  message:string = '';
  error!:string  ;

  //TODO : GET ID FROM ROUTING


  constructor(private jobOfferStore:JobOffersStore,
              private router :ActivatedRoute,
              private jobOfferService:JobOfferService
  ) {
  }

  ngOnInit(): void {
    // this.jobOfferStore.getNbrOffers();
    this.id = this.router.snapshot.params["id"];
    this.getOneJobOffer(this.id)
    this.paramsSubscription = this.router.params.
    subscribe((param:Params)=>{
      this.id = param["id"]
    })
  }


  getOneJobOffer(id:string){
    this.jobOfferService.getOneJobOffer(this.id).subscribe({
      next:(data)=>{
        this.jobOffer=data;
      },
      error:(error)=>{
        this.message = error.message;
        this.error=error.message;
        console.log(error)
      }
    });
  }


  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();

  }


}
