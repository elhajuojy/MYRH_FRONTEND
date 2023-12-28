import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySingUpComponent } from './company-sing-up.component';

describe('SingUpComponent', () => {
  let component: CompanySingUpComponent;
  let fixture: ComponentFixture<CompanySingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySingUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
