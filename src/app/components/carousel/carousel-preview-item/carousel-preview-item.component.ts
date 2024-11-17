import {
  Component,
  effect,
  HostBinding,
  HostListener,
  inject,
} from '@angular/core';
import { CarouselPreviewService } from '../carousel-preview/carousel-preview.service';

@Component({
  selector: 'app-carousel-preview-item',
  standalone: true,
  imports: [],
  templateUrl: './carousel-preview-item.component.html',
  styleUrl: './carousel-preview-item.component.scss',
})
export class CarouselPreviewItemComponent {
  @HostBinding('role')
  private _role = 'button';

  @HostBinding('attr.aria-current')
  private _ariaCurrent = false;

  private _carouselPreviewService = inject(CarouselPreviewService);

  private _index = 0;

  @HostListener('click')
  private _handleClick = () => {
    this._carouselPreviewService.goToItem(this._index);
  };

  constructor() {
    this._index = this._carouselPreviewService.registerItem();

    effect(() => {
      this._ariaCurrent =
        this._carouselPreviewService.$currentItem().index === this._index;
    });
  }
}
