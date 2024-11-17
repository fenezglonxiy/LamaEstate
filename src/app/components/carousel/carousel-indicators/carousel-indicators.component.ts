import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../button';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'app-carousel-indicators',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './carousel-indicators.component.html',
  styleUrl: './carousel-indicators.component.scss',
})
export class CarouselIndicatorsComponent {
  private _carouselService = inject(CarouselService);

  $canGotoPrevious = this._carouselService.$canGotoPrevious;

  $canGotoNext = this._carouselService.$canGotoNext;

  private _gotoPrevious() {
    if (this.$canGotoPrevious()) {
      this._carouselService.gotoItem(
        this._carouselService.$currentItem().index - 1
      );
    }
  }

  handlePreviousIndicatorClick = this._gotoPrevious.bind(this);

  private _gotoNext() {
    if (this.$canGotoNext()) {
      this._carouselService.gotoItem(
        this._carouselService.$currentItem().index + 1
      );
    }
  }

  handleNextIndicatorClick = this._gotoNext.bind(this);
}
