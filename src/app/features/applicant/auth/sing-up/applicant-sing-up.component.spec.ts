import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantSingUpComponent } from './applicant-sing-up.component';

describe('SingUpComponent', () => {
  let component: ApplicantSingUpComponent;
  let fixture: ComponentFixture<ApplicantSingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantSingUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
