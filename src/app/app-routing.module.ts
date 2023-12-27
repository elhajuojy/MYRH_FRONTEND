import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobOffersComponent} from "./features/job-offers/job-offers.component";

const routes: Routes = [
  {
    path: "job-offers", component: JobOffersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
