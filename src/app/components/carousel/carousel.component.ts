import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [CarouselService],
})
export class CarouselComponent {
  private _carouselService = inject(CarouselService);

  @Output()
  close = new EventEmitter<void>();

  constructor() {
    this._carouselService.emitCloseEvent = this.close.emit.bind(this);
  }
}
