import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferApplicationCardComponent } from './job-offer-application-card.component';

describe('JobOfferApplicationCardComponent', () => {
  let component: JobOfferApplicationCardComponent;
  let fixture: ComponentFixture<JobOfferApplicationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferApplicationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferApplicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
