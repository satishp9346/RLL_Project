import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRequestPropertyCardComponent } from './seller-request-property-card.component';

describe('SellerRequestPropertyCardComponent', () => {
  let component: SellerRequestPropertyCardComponent;
  let fixture: ComponentFixture<SellerRequestPropertyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerRequestPropertyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerRequestPropertyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
