import { TestBed } from '@angular/core/testing';

import { AdminRequestsServiceService } from './admin-requests-service.service';

describe('AdminRequestsServiceService', () => {
  let service: AdminRequestsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRequestsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
