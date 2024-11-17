import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { CarouselService } from '../carousel.service';
import { CommonModule } from '@angular/common';
import { AnimateCounterFn } from '../types';

@Component({
  selector: 'app-carousel-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-counter.component.html',
  styleUrl: './carousel-counter.component.scss',
})
export class CarouselCounterComponent
  implements AfterViewInit, AfterContentInit
{
  @ViewChild('counter', { read: ElementRef, static: true })
  private _counterRef!: ElementRef<any>;

  private _carouselService = inject(CarouselService);

  counts: Array<number> = [];

  maxCount = 0;

  ngAfterViewInit(): void {
    const animateCounterCallbackFn: AnimateCounterFn = (currentItem, gsap) => {
      const counterElement = this._counterRef.nativeElement as HTMLElement;

      const counterY = -20 * currentItem.index;

      gsap.to(counterElement, {
        y: counterY,
        duration: 1,
        ease: 'hop',
      });
    };

    this._carouselService.registerAnimateCounterCallbackFn(
      animateCounterCallbackFn.bind(this)
    );
  }

  ngAfterContentInit(): void {
    this.counts = this._carouselService.content.map((item) => item.index + 1);
    this.maxCount = this._carouselService.content.length;
  }
}
