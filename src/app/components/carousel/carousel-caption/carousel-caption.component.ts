import {
  AfterContentInit,
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { CarouselService } from '../carousel.service';
import { AnimateCaptionFn } from '../types';

@Component({
  selector: 'app-carousel-caption',
  standalone: true,
  imports: [],
  templateUrl: './carousel-caption.component.html',
  styleUrl: './carousel-caption.component.scss',
})
export class CarouselCaptionComponent
  implements AfterViewInit, AfterContentInit
{
  @ViewChild('caption', { read: ElementRef, static: true })
  captionRef!: ElementRef<any>;

  private _carouselService = inject(CarouselService);

  captions: Array<string> = [];

  ngAfterViewInit(): void {
    const animateCaptionCallbackFn: AnimateCaptionFn = (currentItem, gsap) => {
      const captionElement = this.captionRef.nativeElement as HTMLElement;

      const captionY = -60 * currentItem.index;

      gsap.to(captionElement, {
        y: captionY,
        duration: 1,
        ease: 'hop',
      });
    };

    this._carouselService.registerAnimateCaptionCallbackFn(
      animateCaptionCallbackFn.bind(this)
    );
  }

  ngAfterContentInit(): void {
    this.captions = this._carouselService.content.map((item) => item.caption);
  }
}
