import { TestBed } from '@angular/core/testing';

import { PropertyManagerServiceService } from './property-manager-service.service';

describe('PropertyManagerServiceService', () => {
  let service: PropertyManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
