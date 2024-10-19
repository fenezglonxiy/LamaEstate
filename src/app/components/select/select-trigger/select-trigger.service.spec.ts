import { TestBed } from '@angular/core/testing';

import { SelectTriggerService } from './select-trigger.service';

describe('SelectTriggerService', () => {
  let service: SelectTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
