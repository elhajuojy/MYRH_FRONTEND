import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobOffersComponent } from './admin-job-offers.component';

describe('AdminJobOffersComponent', () => {
  let component: AdminJobOffersComponent;
  let fixture: ComponentFixture<AdminJobOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJobOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
