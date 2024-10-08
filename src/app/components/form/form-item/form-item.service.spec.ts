import { TestBed } from '@angular/core/testing';

import { FormItemService } from './form-item.service';

describe('FormItemService', () => {
  let service: FormItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
