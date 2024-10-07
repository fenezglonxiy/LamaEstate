import { TestBed } from '@angular/core/testing';
import { PortableService } from './portable.service';

describe('PortableService', () => {
  let service: PortableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
