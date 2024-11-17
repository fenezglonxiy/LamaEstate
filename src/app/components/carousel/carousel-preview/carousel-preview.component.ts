import { Component } from '@angular/core';
import { CarouselPreviewService } from './carousel-preview.service';

@Component({
  selector: 'app-carousel-preview',
  standalone: true,
  imports: [],
  templateUrl: './carousel-preview.component.html',
  styleUrl: './carousel-preview.component.scss',
  providers: [CarouselPreviewService],
})
export class CarouselPreviewComponent {}
