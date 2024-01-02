import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "angular-toastify";
import {CompanyService} from "../../../service/company/company.service";
import {JobOfferService} from "../../../service/job-offer/job-offer.service";
import {JobOfferResponse} from "../../../interfaces/jobOffer.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  jobOfferForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    contract: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),
    companyId: new FormControl(this.id),
  });
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


  handleJobOfferFormSubmit(jobOfferForm: FormGroup) {
    console.log(jobOfferForm.value)
    this.jobOfferForm.value.companyId = this.id;
    this.jobOfferService.createJobOffer(jobOfferForm.value).subscribe({
      next: (data) => {
        console.log(data)
        this._toastService.success("Job Offer Created Successfully");
        this.jobOffers.push(data);
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
}
