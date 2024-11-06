import { inject, Injectable } from '@angular/core';
import { CarouselService } from '../carousel.service';

@Injectable()
export class CarouselPreviewService {
  private _carouselService = inject(CarouselService);

  private _size = 0;

  public get $currentItem() {
    return this._carouselService.$currentItem;
  }

  registerItem() {
    return this._size++;
  }

  goToItem = this._carouselService.gotoItem.bind(this._carouselService);
}
