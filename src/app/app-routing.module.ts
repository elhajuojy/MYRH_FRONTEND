import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobOffersComponent} from "./features/job-offers/job-offers.component";
import {JobOfferDetailComponent} from "./features/job-offer-detail/job-offer-detail.component";
import {JobOfferApplyComponent} from "./features/job-offer-apply/job-offer-apply.component";
import {CompanyDashboardComponent} from "./features/company/dashboard/company-dashboard.component";
import {CompanyLoginComponent} from "./features/company/auth/login/company-login.component";
import {CompanySingUpComponent} from "./features/company/auth/sing-up/company-sing-up.component";
import {CodeValidationComponent} from "./features/company/auth/code-validation/code-validation.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AdminJobOffersComponent} from "./features/admin/admin-job-offers/admin-job-offers.component";
import {ApplicantLoginComponent} from "./features/applicant/auth/login/applicant-login.component";
import {
  CompanyJobOfferApplicantComponentComponent
} from "./features/company/company-job-offer-applicant-component/company-job-offer-applicant-component.component";

const routes: Routes = [
  {path: "job_offers", component: JobOffersComponent},
  {path: "job_offers/:id", component: JobOfferDetailComponent},
  {path: "job_offers/:id/apply", component: JobOfferApplyComponent},
  {path: 'companies/sing_up', component: CompanySingUpComponent},
  {path: 'companies/login', component: CompanyLoginComponent},
  {path: 'companies/:id/dashboard', component: CompanyDashboardComponent},
  {path: 'companies/:id/dashboard', component: CompanyDashboardComponent,},
  {path:'companies/:id/dashboard/job_applications/:code',component:CompanyJobOfferApplicantComponentComponent},
  {path:'companies/code_validation', component: CodeValidationComponent},
  {path:'applicant/login', component: ApplicantLoginComponent},
  {path:'applicant/sing_up', component: ApplicantLoginComponent},
  {path: 'admin', component: AdminJobOffersComponent},
  // {path: "", redirectTo: "/job-offers", pathMatch: "full"},
  // { path: '**', redirectTo: '/job-offers', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
