import { TestBed } from '@angular/core/testing';

import { CarouselContentService } from './carousel-content.service';

describe('CarouselContentService', () => {
  let service: CarouselContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
