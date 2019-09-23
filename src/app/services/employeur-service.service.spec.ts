import { TestBed } from '@angular/core/testing';

import { EmployeurServiceService } from './employeur-service.service';

describe('EmployeurServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeurServiceService = TestBed.get(EmployeurServiceService);
    expect(service).toBeTruthy();
  });
});
