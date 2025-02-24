import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerListRequestsComponent } from './seller-list-requests.component';

describe('SellerListRequestsComponent', () => {
  let component: SellerListRequestsComponent;
  let fixture: ComponentFixture<SellerListRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerListRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerListRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
