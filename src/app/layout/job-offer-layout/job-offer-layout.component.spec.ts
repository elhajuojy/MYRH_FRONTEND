import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferLayoutComponent } from './job-offer-layout.component';

describe('JobOfferLayoutComponent', () => {
  let component: JobOfferLayoutComponent;
  let fixture: ComponentFixture<JobOfferLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
