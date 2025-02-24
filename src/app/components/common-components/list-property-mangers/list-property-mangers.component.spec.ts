import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropertyMangersComponent } from './list-property-mangers.component';

describe('ListPropertyMangersComponent', () => {
  let component: ListPropertyMangersComponent;
  let fixture: ComponentFixture<ListPropertyMangersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPropertyMangersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPropertyMangersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
