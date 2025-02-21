import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillasFormComponent } from './villas-form.component';

describe('VillasFormComponent', () => {
  let component: VillasFormComponent;
  let fixture: ComponentFixture<VillasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
