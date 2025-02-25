import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestPropertyCardComponent } from './admin-request-property-card.component';

describe('AdminRequestPropertyCardComponent', () => {
  let component: AdminRequestPropertyCardComponent;
  let fixture: ComponentFixture<AdminRequestPropertyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRequestPropertyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRequestPropertyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
