import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "angular-toastify";
import {CompanyService} from "../../../service/company/company.service";
import {JobOfferService} from "../../../service/job-offer/job-offer.service";
import {JobOfferResponse} from "../../../interfaces/jobOffer.model";

@Component({
  selector: 'company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  private id!: number;
  jobOffers:JobOfferResponse[] = []

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
    });

    this.getAllOffersByCompanyId();
  }

  //TODO: GET ALL OFFER'S  RELATED TO THIS COMPANY
  getAllOffersByCompanyId() {

    this.jobOfferService.getAllJobOfferByCompanyId(this.id).subscribe({
      next: (data) => {
        this.jobOffers = data.content;
        console.log(this.jobOffers)

      },
      error: (error) => {
        console.log(error)
      }
    });

  }


}
