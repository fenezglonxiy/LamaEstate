import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPreviewComponent } from './carousel-preview.component';

describe('CarouselPreviewComponent', () => {
  let component: CarouselPreviewComponent;
  let fixture: ComponentFixture<CarouselPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
