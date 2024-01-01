import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobOfferApplicantComponentComponent } from './company-job-offer-applicant-component.component';

describe('CompanyJobOfferApplicantComponentComponent', () => {
  let component: CompanyJobOfferApplicantComponentComponent;
  let fixture: ComponentFixture<CompanyJobOfferApplicantComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyJobOfferApplicantComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyJobOfferApplicantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
