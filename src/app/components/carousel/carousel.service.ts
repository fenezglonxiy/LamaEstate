import { computed, effect, Injectable, signal } from '@angular/core';
import {
  AnimateCaptionFn,
  AnimateCarouselItemFn,
  AnimateCounterFn,
  CarouselItemMetadata,
} from './types';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

@Injectable()
export class CarouselService {
  $currentItem = computed<CarouselItemMetadata>(() => this._$currentItem());

  $canGotoPrevious = computed<boolean>(() => this._$currentItem().index > 0);

  $canGotoNext = computed<boolean>(
    () => this._$currentItem().index < this._content.length - 1
  );

  public get content() {
    return this._content;
  }

  private _content: Array<CarouselItemMetadata> = [];

  private _$currentItem = signal<CarouselItemMetadata>({
    index: -1,
    caption: '',
  });

  emitCloseEvent!: () => void;

  private previousItemIndex = -1;

  private _gsap: GSAP;

  private _animateCaptionCallbackFn: AnimateCaptionFn | undefined;

  private _animateCounterCallbackFn: AnimateCounterFn | undefined;

  private _animateCarouselItemCallbackFn: AnimateCarouselItemFn | undefined;

  constructor() {
    gsap.registerPlugin(CustomEase);

    CustomEase.create(
      'hop',
      'M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1'
    );

    this._gsap = gsap;

    effect(() => {
      const currentItemIndex = this.$currentItem().index;

      if (this.previousItemIndex === -1) {
        this.previousItemIndex = currentItemIndex;
        return;
      }

      this.animateCounter();
      this.animateCaption();

      if (currentItemIndex > this.previousItemIndex) {
        this.animateCarouselItemToRight();
      } else if (currentItemIndex < this.previousItemIndex) {
        this.animateCarouselItemToLeft();
      }

      this.previousItemIndex = currentItemIndex;
    });
  }

  registerContent(content: Array<CarouselItemMetadata>) {
    if (this._content.length > 0 || content.length === 0) {
      return false;
    }

    this._content = content;
    this._$currentItem.set(this._content[0]);
    return true;
  }

  registerGSAP(gsap: GSAP) {
    if (this._gsap) {
      return false;
    }

    this._gsap = gsap;
    return true;
  }

  registerAnimateCaptionCallbackFn(callbackFn: AnimateCaptionFn) {
    if (this._animateCaptionCallbackFn) {
      return false;
    }

    this._animateCaptionCallbackFn = callbackFn;
    return true;
  }

  registerAnimateCounterCallbackFn(callbackFn: AnimateCounterFn) {
    if (this._animateCounterCallbackFn) {
      return false;
    }

    this._animateCounterCallbackFn = callbackFn;
    return true;
  }

  registerAnimateCarouselItemCallbackFn(callbackFn: AnimateCarouselItemFn) {
    if (this._animateCarouselItemCallbackFn) {
      return false;
    }

    this._animateCarouselItemCallbackFn = callbackFn;
    return true;
  }

  animateCaption() {
    if (!this._animateCaptionCallbackFn) {
      return;
    }

    this._animateCaptionCallbackFn(this._$currentItem(), this._gsap);
  }

  animateCounter() {
    if (!this._animateCounterCallbackFn) {
      return;
    }

    this._animateCounterCallbackFn(this._$currentItem(), this._gsap);
  }

  animateCarouselItem(direction: 'left' | 'right') {
    if (!this._animateCarouselItemCallbackFn) {
      return;
    }

    this._animateCarouselItemCallbackFn(
      this._$currentItem(),
      direction,
      this._gsap
    );
  }

  animateCarouselItemToLeft() {
    this.animateCarouselItem('left');
  }

  animateCarouselItemToRight() {
    this.animateCarouselItem('right');
  }

  gotoItem(index: number) {
    if (index < 0 || index >= this._content.length) {
      return;
    }

    this._$currentItem.set(this._content[index]);
  }
}
