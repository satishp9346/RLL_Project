import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerFavouratePropertiesComponent } from './buyer-favourate-properties.component';

describe('BuyerFavouratePropertiesComponent', () => {
  let component: BuyerFavouratePropertiesComponent;
  let fixture: ComponentFixture<BuyerFavouratePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerFavouratePropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerFavouratePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
