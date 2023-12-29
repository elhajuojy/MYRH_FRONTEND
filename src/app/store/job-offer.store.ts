import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {JobOfferService} from "../service/job-offer/job-offer.service";
import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";


export interface  JobOffersComponentsState{
  isLoading: boolean;
  nbrOffers: number;
  offers: any[];
}

@Injectable(
  {providedIn:"root"}
)
export class JobOffersStore extends ComponentStore<JobOffersComponentsState>{
  private _isLoading$ = this.select((state)=>state.isLoading)
  private _nbrOffers$ = this.select((state)=>state.nbrOffers)
  private _offers$ = this.select((state)=>state.offers)

  vim$ =  this.select({
    isLoading: this._isLoading$,
    nbrOffers: this._nbrOffers$,
    offers:this._offers$
  })
  constructor(private jobOfferService:JobOfferService) {
    super({
      isLoading:false,
      nbrOffers:0,
      offers:[]
    });
  }

  setIsLoading = this.updater((state) => ({ ...state, isLoading: true }));
  addNberOfJobOffers = this.updater((state) =>({
    ...state ,
    isLoading:false,
    nbrOffers: state.nbrOffers + 10
  }))

  setNbrOfJobOffer =  this.updater((state,nbrOffers:number) =>({
    ...state ,
    nbrOffers
  }))

  //TODO: FIX THIS


  // getNbrOffers = this.effect((trigger$) => {
  //   return trigger$.pipe(
  //     tap(() => {
  //       console.log("getNbrOffers: Triggered");
  //       this.setIsLoading();
  //     }),
  //     exhaustMap(() => {
  //       return this.jobOfferService.getNbrOffers().subscribe(
  //         (nbrOffers) => {
  //           this.setNbrOfJobOffer(nbrOffers);
  //         },
  //         (err: HttpErrorResponse) => {
  //           console.log(err);
  //           this.setIsLoading();
  //         }
  //       )
  //     })
  //   );
  // });

}


