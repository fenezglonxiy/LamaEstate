import { Component, HostListener, ViewContainerRef } from '@angular/core';
import { PopoverService } from '../popover.service';

@Component({
  selector: 'app-popover-trigger',
  standalone: true,
  imports: [],
  templateUrl: './popover-trigger.component.html',
  styleUrl: './popover-trigger.component.scss',
})
export class PopoverTriggerComponent {
  constructor(private _popoverService: PopoverService, vcr: ViewContainerRef) {
    this._popoverService.registerTrigger(vcr.element);
  }

  @HostListener('click')
  handleClick() {
    this._popoverService.toggleContent();
  }
}
