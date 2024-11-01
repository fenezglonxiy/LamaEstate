import { TestBed } from '@angular/core/testing';

import { EstateListService } from './estate-list.service';

describe('EstateListService', () => {
  let service: EstateListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstateListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
