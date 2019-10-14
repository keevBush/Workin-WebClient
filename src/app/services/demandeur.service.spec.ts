import { TestBed } from '@angular/core/testing';

import { DemandeurService } from './demandeur.service';

describe('DemandeurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandeurService = TestBed.get(DemandeurService);
    expect(service).toBeTruthy();
  });
});
