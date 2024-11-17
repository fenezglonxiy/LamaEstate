import {
  Component,
  effect,
  EventEmitter,
  inject,
  input,
  Output,
} from '@angular/core';
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
  item = input(0);

  @Output()
  close = new EventEmitter<void>();

  private _carouselService = inject(CarouselService);

  constructor() {
    const emitCloseEvent = () => {
      this.close.emit();
    };

    this._carouselService.emitCloseEvent = emitCloseEvent.bind(this);

    effect(
      () => {
        const index = this.item();
        this._carouselService.gotoItem(index);
      },
      { allowSignalWrites: true }
    );
  }
}
