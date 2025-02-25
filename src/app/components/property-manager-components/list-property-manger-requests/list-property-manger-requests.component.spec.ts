import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropertyMangerRequestsComponent } from './list-property-manger-requests.component';

describe('ListPropertyMangerRequestsComponent', () => {
  let component: ListPropertyMangerRequestsComponent;
  let fixture: ComponentFixture<ListPropertyMangerRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPropertyMangerRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPropertyMangerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
