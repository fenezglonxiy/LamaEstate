import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCaptionComponent } from './carousel-caption.component';

describe('CarouselCaptionComponent', () => {
  let component: CarouselCaptionComponent;
  let fixture: ComponentFixture<CarouselCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCaptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
