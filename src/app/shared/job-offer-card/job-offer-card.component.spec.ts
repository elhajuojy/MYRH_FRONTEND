import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferCardComponent } from './job-offer-card.component';

describe('JobOfferCardComponent', () => {
  let component: JobOfferCardComponent;
  let fixture: ComponentFixture<JobOfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
