import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAsideBarDashboardComponent } from './admin-aside-bar-dashboard.component';

describe('AdminAsideBarDashboardComponent', () => {
  let component: AdminAsideBarDashboardComponent;
  let fixture: ComponentFixture<AdminAsideBarDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAsideBarDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAsideBarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
