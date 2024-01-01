import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {SearchbarComponent} from "./shared/search-bar/searchbar.component";
import { JobOfferCardComponent } from './shared/job-offer-card/job-offer-card.component';
import { JobOffersComponent } from './features/job-offers/job-offers.component';
import { JobOfferLayoutComponent } from './layouts/job-offer-layout/job-offer-layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { JobOfferDetailComponent } from './features/job-offer-detail/job-offer-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { JobOfferApplyComponent } from './features/job-offer-apply/job-offer-apply.component';
import { JobOfferApplyFormComponent } from './shared/job-offer-apply-form/job-offer-apply-form.component';
import { CompanyLoginComponent } from './features/company/auth/login/company-login.component';
import { CompanyDashboardComponent } from './features/company/dashboard/company-dashboard.component';
import { CompanySingUpComponent } from './features/company/auth/sing-up/company-sing-up.component';
import { OffersComponent } from './features/company/offers/offers.component';
import { CompanyLayoutComponent } from './layouts/company-layout/company-layout.component';
import {CompanyAddJobOffersComponent} from "./features/company/add-offers/company-add-job-offers.component";
import { AdminJobOffersComponent } from './features/admin/admin-job-offers/admin-job-offers.component';
import { AdminAsideBarDashboardComponent } from './shared/admin/admin-aside-bar-dashboard/admin-aside-bar-dashboard.component';
import { AdminHeaderDashboardComponent } from './shared/admin/admin-header-dashboard/admin-header-dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularToastifyModule} from "angular-toastify";
import { ApplicantComponent } from './features/applicant/applicant.component';
import {ApplicantSingUpComponent} from "./features/applicant/auth/sing-up/applicant-sing-up.component";
import {ApplicantLoginComponent} from "./features/applicant/auth/login/applicant-login.component";
import {CodeValidationComponent} from "./features/company/auth/code-validation/code-validation.component";
import { CompanyJobOfferApplicantComponentComponent } from './features/company/company-job-offer-applicant-component/company-job-offer-applicant-component.component';

@NgModule({
  declarations: [
    BannerComponent,
    NavbarComponent,
    SearchbarComponent,
    ApplicantSingUpComponent,
    ApplicantLoginComponent,
    JobOfferCardComponent,
    JobOffersComponent,
    JobOfferLayoutComponent,
    JobOfferDetailComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PaginationComponent,
    JobOfferApplyComponent,
    CodeValidationComponent,
    JobOfferApplyFormComponent,
    CompanyLoginComponent,
    CompanyAddJobOffersComponent,
    CompanyDashboardComponent,
    CompanySingUpComponent,
    OffersComponent,
    CompanyLayoutComponent,
    AppComponent,
    AdminJobOffersComponent,
    AdminAsideBarDashboardComponent,
    AdminHeaderDashboardComponent,
    ApplicantComponent,
    CompanyJobOfferApplicantComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularToastifyModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
