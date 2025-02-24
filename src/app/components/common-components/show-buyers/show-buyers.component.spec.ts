import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBuyersComponent } from './show-buyers.component';

describe('ShowBuyersComponent', () => {
  let component: ShowBuyersComponent;
  let fixture: ComponentFixture<ShowBuyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBuyersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
