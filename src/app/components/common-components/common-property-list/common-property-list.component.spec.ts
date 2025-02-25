import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPropertyListComponent } from './common-property-list.component';

describe('CommonPropertyListComponent', () => {
  let component: CommonPropertyListComponent;
  let fixture: ComponentFixture<CommonPropertyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPropertyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
