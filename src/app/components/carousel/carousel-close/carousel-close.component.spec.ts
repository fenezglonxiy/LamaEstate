import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCloseComponent } from './carousel-close.component';

describe('CarouselCloseComponent', () => {
  let component: CarouselCloseComponent;
  let fixture: ComponentFixture<CarouselCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCloseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
