import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCardManagerComponent } from './property-card-manager.component';

describe('PropertyCardManagerComponent', () => {
  let component: PropertyCardManagerComponent;
  let fixture: ComponentFixture<PropertyCardManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyCardManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyCardManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
