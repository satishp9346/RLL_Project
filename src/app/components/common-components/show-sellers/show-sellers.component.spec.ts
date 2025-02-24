import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSellersComponent } from './show-sellers.component';

describe('ShowSellersComponent', () => {
  let component: ShowSellersComponent;
  let fixture: ComponentFixture<ShowSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSellersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
