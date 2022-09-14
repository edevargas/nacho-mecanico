import { TestBed } from '@angular/core/testing';

import { MechanicServicesFacadeService } from './mechanic-services-facade.service';

describe('MechanicServicesFacadeService', () => {
  let service: MechanicServicesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MechanicServicesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
