import { TestBed } from '@angular/core/testing';

import { ChipService } from './chip.service';

describe('ChipService', () => {
  let service: ChipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
