import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPreviewItemComponent } from './carousel-preview-item.component';

describe('CarouselPreviewItemComponent', () => {
  let component: CarouselPreviewItemComponent;
  let fixture: ComponentFixture<CarouselPreviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselPreviewItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
