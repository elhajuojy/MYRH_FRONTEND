import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {SearchbarComponent} from "./shared/search-bar/searchbar.component";
import { JobOfferCardComponent } from './shared/job-offer-card/job-offer-card.component';
import { JobOffersComponent } from './features/job-offers/job-offers.component';
import { JobOfferLayoutComponent } from './layout/job-offer-layout/job-offer-layout.component';
import {FormsModule} from "@angular/forms";
import { JobOfferDetailComponent } from './features/job-offer-detail/job-offer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    SearchbarComponent,
    JobOfferCardComponent,
    JobOffersComponent,
    JobOfferLayoutComponent,
    JobOfferDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
