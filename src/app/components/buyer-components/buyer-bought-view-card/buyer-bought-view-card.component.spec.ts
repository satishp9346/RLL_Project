import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerBoughtViewCardComponent } from './buyer-bought-view-card.component';

describe('BuyerBoughtViewCardComponent', () => {
  let component: BuyerBoughtViewCardComponent;
  let fixture: ComponentFixture<BuyerBoughtViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerBoughtViewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerBoughtViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
