import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminRequestsComponent } from './list-admin-requests.component';

describe('ListAdminRequestsComponent', () => {
  let component: ListAdminRequestsComponent;
  let fixture: ComponentFixture<ListAdminRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdminRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAdminRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
