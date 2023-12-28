import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderDashboardComponent } from './admin-header-dashboard.component';

describe('AdminHeaderDashboardComponent', () => {
  let component: AdminHeaderDashboardComponent;
  let fixture: ComponentFixture<AdminHeaderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeaderDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeaderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
