import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPropertyCardComponent } from './common-property-card.component';

describe('CommonPropertyCardComponent', () => {
  let component: CommonPropertyCardComponent;
  let fixture: ComponentFixture<CommonPropertyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPropertyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonPropertyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
