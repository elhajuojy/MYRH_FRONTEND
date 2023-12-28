import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddJobOffersComponent } from './company-add-job-offers.component';

describe('AddOffersComponent', () => {
  let component: CompanyAddJobOffersComponent;
  let fixture: ComponentFixture<CompanyAddJobOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAddJobOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyAddJobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
