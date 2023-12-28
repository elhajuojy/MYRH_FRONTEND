import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobOffersComponent} from "./features/job-offers/job-offers.component";
import {JobOfferDetailComponent} from "./features/job-offer-detail/job-offer-detail.component";
import {JobOfferApplyComponent} from "./features/job-offer-apply/job-offer-apply.component";
import {CompanyDashboardComponent} from "./features/company/dashboard/company-dashboard.component";
import {CompanyLoginComponent} from "./features/company/auth/login/company-login.component";
import {CompanySingUpComponent} from "./features/company/auth/sing-up/company-sing-up.component";
import {CodeValidationComponent} from "./features/auth/code-validation/code-validation.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AdminJobOffersComponent} from "./features/admin/admin-job-offers/admin-job-offers.component";

const routes: Routes = [
  {path: "job-offers", component: JobOffersComponent},
  {path: "job-offers/:id", component: JobOfferDetailComponent},
  {path: "job-offers/:id/apply", component: JobOfferApplyComponent},
  {path: 'companies/:id/dashboard', component: CompanyDashboardComponent},
  {path: 'companies/login', component: CompanyLoginComponent},
  {path: 'companies/sing_up', component: CompanySingUpComponent},
  {path:'code-validation', component: CodeValidationComponent},
  {path: 'admin', component: AdminJobOffersComponent},
  {path: "", redirectTo: "/job-offers", pathMatch: "full"},
  { path: '**', redirectTo: '/job-offers', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
