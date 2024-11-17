import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselIndicatorsComponent } from './carousel-indicators.component';

describe('CarouselIndicatorComponent', () => {
  let component: CarouselIndicatorsComponent;
  let fixture: ComponentFixture<CarouselIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselIndicatorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
