import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPreviewImageComponent } from './carousel-preview-image.component';

describe('CarouselPreviewImageComponent', () => {
  let component: CarouselPreviewImageComponent;
  let fixture: ComponentFixture<CarouselPreviewImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselPreviewImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPreviewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
