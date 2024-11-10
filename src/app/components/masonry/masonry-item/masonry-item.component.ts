import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-masonry-item',
  standalone: true,
  imports: [],
  templateUrl: './masonry-item.component.html',
  styleUrl: './masonry-item.component.scss',
})
export class MasonryItemComponent {
  @HostBinding('style.order')
  @Input()
  order: number | undefined;

  elementRef = inject(ElementRef);
}
