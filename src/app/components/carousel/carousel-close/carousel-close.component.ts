import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../button';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'app-carousel-close',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './carousel-close.component.html',
  styleUrl: './carousel-close.component.scss',
})
export class CarouselCloseComponent {
  private _carouselService = inject(CarouselService);

  private _closeCarousel() {
    this._carouselService.emitCloseEvent();
  }

  handleCloseButtonClick = this._closeCarousel.bind(this);
}
