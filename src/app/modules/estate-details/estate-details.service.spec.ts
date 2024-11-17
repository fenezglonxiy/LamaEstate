import { TestBed } from '@angular/core/testing';

import { EstateDetailsService } from './estate-details.service';

describe('EstateDetailsService', () => {
  let service: EstateDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstateDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
