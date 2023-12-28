import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobOffersComponent} from "./features/job-offers/job-offers.component";
import {JobOfferDetailComponent} from "./features/job-offer-detail/job-offer-detail.component";

const routes: Routes = [
  {path: "job-offers", component: JobOffersComponent},
  {path: "job-offers/:id", component: JobOfferDetailComponent},
  { path: '', redirectTo: '/job-offers', pathMatch: 'full' },
  { path: '**', redirectTo: '/job-offers', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
