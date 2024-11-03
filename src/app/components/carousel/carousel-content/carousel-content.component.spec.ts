import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselContentComponent } from './carousel-content.component';

describe('CarouselContentComponent', () => {
  let component: CarouselContentComponent;
  let fixture: ComponentFixture<CarouselContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
