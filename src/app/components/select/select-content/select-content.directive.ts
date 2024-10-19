import {
  AfterContentInit,
  Directive,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PopoverService } from '../../popover';
import { SelectService } from '../select.service';

@Directive({
  standalone: true,
})
export class SelectContentDirective implements OnInit, OnDestroy {
  constructor(
    private _popoverService: PopoverService,
    private _selectService: SelectService
  ) {}

  private _triggerObserver: ResizeObserver | undefined;

  @HostBinding('style.min-width')
  private _minWidth = '';

  @HostBinding('style.width')
  private _width = '';

  @HostBinding('style.left')
  private _left = '';

  @HostBinding('style.transform')
  private readonly _transform = 'translateX(-50%)';

  ngOnInit(): void {
    if (this._popoverService.triggerElement) {
      this.calculateWidth();

      this._triggerObserver = new ResizeObserver(() => {
        this.calculateWidth();
      });

      this._triggerObserver.observe(this._popoverService.triggerElement);
    }
  }

  ngOnDestroy(): void {
    if (this._triggerObserver && this._popoverService.triggerElement) {
      this._triggerObserver.unobserve(this._popoverService.triggerElement);
    }
  }

  calculateWidth() {
    const triggerWidth = this._popoverService.triggerSize?.width;
    const maxTriggerWidth = this._selectService.maxTriggerWidth;
    this._minWidth = triggerWidth + 'px';
    this._width = maxTriggerWidth + 'px';
    this._left = Math.ceil(triggerWidth / 2) + 'px';
  }
}
