import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCounterComponent } from './carousel-counter.component';

describe('CarouselCounterComponent', () => {
  let component: CarouselCounterComponent;
  let fixture: ComponentFixture<CarouselCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
