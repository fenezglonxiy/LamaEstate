import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-preview-image',
  standalone: true,
  imports: [],
  templateUrl: './carousel-preview-image.component.html',
  styleUrl: './carousel-preview-image.component.scss',
})
export class CarouselPreviewImageComponent {
  @Input({ required: true })
  src = '';

  @Input()
  alt = '';
}
