import {
  Component,
  HostBinding,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PopoverService } from '../popover.service';
import { CommonModule } from '@angular/common';
import { PaperComponent } from '../../paper/paper.component';

@Component({
  selector: 'app-popover-content',
  standalone: true,
  imports: [CommonModule, PaperComponent],
  templateUrl: './popover-content.component.html',
  styleUrl: './popover-content.component.scss',
})
export class PopoverContentComponent implements OnInit, OnDestroy {
  private _popoverService = inject(PopoverService);

  @HostBinding('style.top')
  anchorTop = '';

  @HostBinding('style.left')
  anchorLeft = '';

  @HostBinding('style.transform')
  transform = '';

  ngOnInit(): void {
    this.calculateAnchor();
    this.calculateTransform();
    window.addEventListener('resize', this.calculateAnchor.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.calculateAnchor.bind(this));
  }

  calculateAnchor(): void {
    const anchorOrigin = this._popoverService.anchorOrigin;
    const triggerPos = this._popoverService.triggerPosition;
    const triggerSize = this._popoverService.triggerSize;

    switch (anchorOrigin.vertical) {
      case 'top':
        this.anchorTop = triggerPos?.offsetTop + 'px';
        break;
      case 'center':
        this.anchorTop = triggerPos?.offsetTop + triggerSize?.height / 2 + 'px';
        break;
      case 'bottom':
        this.anchorTop = triggerPos?.offsetTop + triggerSize?.height + 'px';
        break;
    }

    switch (anchorOrigin.horizontal) {
      case 'left':
        this.anchorLeft = triggerPos?.offsetLeft + 'px';
        break;
      case 'center':
        this.anchorLeft =
          triggerPos?.offsetLeft + triggerSize?.width / 2 + 'px';
        break;
      case 'right':
        this.anchorLeft = triggerPos?.offsetLeft + triggerSize?.width + 'px';
        break;
    }
  }

  calculateTransform(): void {
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
