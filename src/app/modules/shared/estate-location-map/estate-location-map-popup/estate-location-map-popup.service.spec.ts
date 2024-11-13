import { TestBed } from '@angular/core/testing';

import { EstateLocationMapPopupService } from './estate-location-map-popup.service';

describe('EstateLocationMapPopupService', () => {
  let service: EstateLocationMapPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstateLocationMapPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
