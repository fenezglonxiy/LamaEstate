import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-image',
  standalone: true,
  imports: [],
  templateUrl: './carousel-image.component.html',
  styleUrl: './carousel-image.component.scss',
})
export class CarouselImageComponent {
  @Input({ required: true })
  src = '';

  @Input()
  alt = '';
}
