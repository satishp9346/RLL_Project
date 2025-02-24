import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerViewedPropertiesComponent } from './buyer-viewed-properties.component';

describe('BuyerViewedPropertiesComponent', () => {
  let component: BuyerViewedPropertiesComponent;
  let fixture: ComponentFixture<BuyerViewedPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerViewedPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerViewedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
