import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferApplyComponent } from './job-offer-apply.component';

describe('JobOfferApplyComponent', () => {
  let component: JobOfferApplyComponent;
  let fixture: ComponentFixture<JobOfferApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferApplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
