import { Directive, HostListener, ViewContainerRef } from '@angular/core';
import { PopoverService } from '../popover.service';

@Directive({
  standalone: true,
})
export class PopoverTriggerDirective {
  constructor(private _popoverService: PopoverService, vcr: ViewContainerRef) {
    this._popoverService.registerTrigger(vcr.element);
  }

  @HostListener('click')
  handleClick() {
    this._popoverService.toggleContent();
  }
}
