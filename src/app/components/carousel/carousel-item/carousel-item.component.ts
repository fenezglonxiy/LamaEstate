import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { CarouselContentService } from '../carousel-content/carousel-content.service';

@Component({
  selector: 'app-carousel-item',
  standalone: true,
  imports: [],
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.scss',
})
export class CarouselItemComponent implements OnInit {
  @Input()
  caption = '';

  @HostBinding('role')
  private _role = 'listitem';

  private _index = 0;

  private _elementRef = inject(ElementRef);

  private _carouselContentService = inject(CarouselContentService);

  ngOnInit(): void {
    this._index = this._carouselContentService.registerItem(
      this._elementRef,
      this.caption
    );
  }
}
