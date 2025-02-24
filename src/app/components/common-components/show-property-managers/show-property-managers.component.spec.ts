import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPropertyManagersComponent } from './show-property-managers.component';

describe('ShowPropertyManagersComponent', () => {
  let component: ShowPropertyManagersComponent;
  let fixture: ComponentFixture<ShowPropertyManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPropertyManagersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPropertyManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
