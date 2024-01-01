import { Component } from '@angular/core';
import {JobOfferApplicationsPageResponse, JobOfferResponse} from "../../../interfaces/jobOffer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "angular-toastify";
import {CompanyService} from "../../../service/company/company.service";
import {JobOfferService} from "../../../service/job-offer/job-offer.service";

@Component({
  selector: 'app-company-job-offer-applicant-component',
  templateUrl: './company-job-offer-applicant-component.component.html',
  styleUrls: ['./company-job-offer-applicant-component.component.css']
})
export class CompanyJobOfferApplicantComponentComponent {
  private id!: number;
  private jobOfferId!: number;
  jobApplications:JobOfferApplicationsPageResponse[] = []

  constructor(
    private router: Router,
    private _toastService: ToastService,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private jobOfferService: JobOfferService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.jobOfferId = params['code'];
    });
    this.getJobOfferApplicationByJobOfferIdAndCompanyId();

  }

  getJobOfferApplicationByJobOfferIdAndCompanyId() {

      this.jobOfferService.getJobOfferApplicationByJobOfferIdAndCompanyId(this.id, this.jobOfferId).subscribe({
        next: (data) => {
          this.jobApplications = data;
          console.log(data)

        },
        error: (error) => {
          this._toastService.error("Error while getting job offer applications")
          console.log(error)
        }
      });
  }
}
