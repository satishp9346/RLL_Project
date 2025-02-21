import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualHousesComponent } from './individual-houses.component';

describe('IndividualHousesComponent', () => {
  let component: IndividualHousesComponent;
  let fixture: ComponentFixture<IndividualHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualHousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
