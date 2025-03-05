import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSoldComponent } from './buyer-sold.component';

describe('BuyerSoldComponent', () => {
  let component: BuyerSoldComponent;
  let fixture: ComponentFixture<BuyerSoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerSoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
