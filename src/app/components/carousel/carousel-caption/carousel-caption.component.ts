import { AfterContentInit, Component, computed, inject } from '@angular/core';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'app-carousel-caption',
  standalone: true,
  imports: [],
  templateUrl: './carousel-caption.component.html',
  styleUrl: './carousel-caption.component.scss',
})
export class CarouselCaptionComponent implements AfterContentInit {
  private _carouselService = inject(CarouselService);

  captions: Array<string> = [];

  ngAfterContentInit(): void {
    this.captions = this._carouselService.content.map((item) => item.caption);
  }
}
