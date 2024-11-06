import {
  AfterContentInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';
import { CarouselService } from '../carousel.service';
import { CarouselContentService } from './carousel-content.service';
import { AnimateCarouselItemFn } from '../types';

@Component({
  selector: 'app-carousel-content',
  standalone: true,
  imports: [],
  templateUrl: './carousel-content.component.html',
  styleUrl: './carousel-content.component.scss',
  providers: [CarouselContentService],
})
export class CarouselContentComponent implements AfterContentInit {
  @HostBinding('role')
  private _role = 'list';

  @HostListener('window:keydown.arrowright')
  private _handleArrowRightDown = () => {
    this._carouselService.gotoItem(
      this._carouselService.$currentItem().index + 1
    );
  };

  @HostListener('window:keydown.arrowleft')
  private _handleArrowLeftDown = () => {
    this._carouselService.gotoItem(
      this._carouselService.$currentItem().index - 1
    );
  };

  private _carouselService = inject(CarouselService);

  private _carouselContentService = inject(CarouselContentService);

  private _elementRef = inject(ElementRef);

  private _renderer = inject(Renderer2);

  private _itemElements: Array<ElementRef> = [];

  private _itemHTMLCollection: HTMLCollection =
    this._elementRef.nativeElement.children;

  public get currentItemElement() {
    return this._itemHTMLCollection.item(this._itemHTMLCollection.length - 1);
  }

  constructor() {
    const animateCarouselItemCallbackFn: AnimateCarouselItemFn = (
      currentItem,
      direction,
      gsap
    ) => {
      const currentItemElement = this.currentItemElement;

      if (!currentItemElement) {
        return;
      }

      const nextItemElement = this._itemElements[currentItem.index]
        .nativeElement as HTMLElement;

      gsap.set(nextItemElement.children[0], {
        x: direction === 'left' ? -300 : 300,
      });

      this._renderer.appendChild(
        this._elementRef.nativeElement,
        nextItemElement
      );

      gsap.to(currentItemElement.children[0], {
        x: direction === 'left' ? 300 : -300,
        duration: 1.5,
        ease: 'power4.out',
      });

      gsap.fromTo(
        nextItemElement,
        {
          clipPath:
            direction === 'left'
              ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
              : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.5,
          ease: 'power4.out',
        }
      );

      gsap.to(nextItemElement.children[0], {
        x: 0,
        duration: 1.5,
        ease: 'power4.out',
      });

      if (
        this._itemHTMLCollection.length > this._itemElements.length &&
        this._itemHTMLCollection[0]
      ) {
        this._itemHTMLCollection[0].remove();
      }
    };

    this._carouselService.registerAnimateCarouselItemCallbackFn(
      animateCarouselItemCallbackFn.bind(this)
    );
  }

  ngAfterContentInit(): void {
    this._itemElements = this._carouselContentService.itemElements;
    this._renderer.appendChild(
      this._elementRef.nativeElement,
      this._itemElements[0].nativeElement
    );
    this._carouselService.registerContent(this._carouselContentService.items);
  }
}
