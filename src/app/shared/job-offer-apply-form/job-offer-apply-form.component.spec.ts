import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferApplyFormComponent } from './job-offer-apply-form.component';

describe('JobOfferApplyFormComponent', () => {
  let component: JobOfferApplyFormComponent;
  let fixture: ComponentFixture<JobOfferApplyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferApplyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferApplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
