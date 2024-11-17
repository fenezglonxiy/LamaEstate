import { TestBed } from '@angular/core/testing';

import { CarouselPreviewService } from './carousel-preview.service';

describe('CarouselPreviewService', () => {
  let service: CarouselPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
