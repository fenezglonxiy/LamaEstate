import {
  Directive,
  HostBinding,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PopoverService } from '../popover.service';

@Directive({
  standalone: true,
})
export class PopoverAnchorDirective implements OnInit, OnDestroy {
  private _popoverService = inject(PopoverService);

  private _triggerObserver: ResizeObserver | null = null;

  @HostBinding('style.position')
  readonly position = 'absolute';

  @HostBinding('style.top')
  anchorTop = '';

  @HostBinding('style.left')
  anchorLeft = '';

  @HostBinding('style.transform')
  transform = '';

  ngOnInit(): void {
    this.calculateAnchor();
    this.calculateTransform();

    if (this._popoverService.triggerElement) {
      this._triggerObserver = new ResizeObserver(() => {
        this.calculateAnchor();
      });

      this._triggerObserver.observe(this._popoverService.triggerElement);
      window.addEventListener('resize', this.calculateAnchor.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (this._triggerObserver && this._popoverService.triggerElement) {
      this._triggerObserver.unobserve(this._popoverService.triggerElement);
      window.removeEventListener('resize', this.calculateAnchor.bind(this));
    }
  }

  calculateAnchor() {
    const triggerPos = this._popoverService.triggerPosition;
    const triggerSize = this._popoverService.triggerSize;
    const anchorOrigin = this._popoverService.anchorOrigin;
    let top = 0;

    switch (anchorOrigin.vertical) {
      case 'top':
        top = triggerPos?.y;
        break;
      case 'center':
        top = triggerPos?.y + triggerSize?.height / 2;
        break;
      case 'bottom':
        top = triggerPos?.y + triggerSize?.height;
        break;
    }

    let left = 0;

    switch (anchorOrigin.horizontal) {
      case 'left':
        left = triggerPos?.x;
        break;
      case 'center':
        left = triggerPos?.x + triggerSize?.width / 2;
        break;
      case 'right':
        left = triggerPos?.x + triggerSize?.width;
        break;
    }

    this.anchorTop = top.toFixed(2) + 'px';
    this.anchorLeft = left.toFixed(2) + 'px';
  }

  calculateTransform() {
    const transformOrigin = this._popoverService.transformOrigin;
    let translateX = 0;
    let translateY = 0;

    switch (transformOrigin.vertical) {
      case 'top':
        translateY = 0;
        break;
      case 'center':
        translateY = -50;
        break;
      case 'bottom':
        translateY = -100;
        break;
    }

    switch (transformOrigin.horizontal) {
      case 'left':
        translateX = 0;
        break;
      case 'center':
        translateX = -50;
        break;
      case 'right':
        translateX = -100;
        break;
    }

    this.transform = `translate(${translateX}%,${translateY}%)`;
  }
}
