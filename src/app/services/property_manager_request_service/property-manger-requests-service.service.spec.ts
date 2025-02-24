import { TestBed } from '@angular/core/testing';

import { PropertyMangerRequestsServiceService } from './property-manger-requests-service.service';

describe('PropertyMangerRequestsServiceService', () => {
  let service: PropertyMangerRequestsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyMangerRequestsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
