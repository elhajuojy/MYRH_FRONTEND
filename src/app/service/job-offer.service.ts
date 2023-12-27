import { Injectable  } from '@angular/core';
import { environment } from "../../environments/environment";
import {Observable, Observer, Subscriber, Subscription, TeardownLogic, Unsubscribable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  private baseUrl: string = environment.backendHost;

  constructor() {
  }

  getNbrOffers(): Observable<number> {
    //CALLING THIS FROM DB
    const customNumber = new NumberSubscriber();
    customNumber.next(100);

    return new Observable((observer: Observer<number>) => {
        customNumber
    });


  }
}


export class NumberSubscriber extends Subscriber<number> {


  override next(value?: number) {
    super.next(value);
  }

  override complete() {
    super.complete();
  }

  override error(err?: any) {
    super.error(err);
  }
}
// Path: src/app/features/job-offer-detail/job-offer-detail.component.html
