import { Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'app-masonry-item',
  standalone: true,
  imports: [],
  templateUrl: './masonry-item.component.html',
  styleUrl: './masonry-item.component.scss',
})
export class MasonryItemComponent {
  elementRef = inject(ElementRef);
}
