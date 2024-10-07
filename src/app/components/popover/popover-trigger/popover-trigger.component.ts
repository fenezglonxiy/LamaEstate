import { Component, inject } from '@angular/core';
import { PopoverService } from '../popover.service';

@Component({
  selector: 'app-popover-trigger',
  standalone: true,
  imports: [],
  templateUrl: './popover-trigger.component.html',
  styleUrl: './popover-trigger.component.scss',
})
export class PopoverTriggerComponent {
  popoverService = inject(PopoverService);

  handleClick() {
    this.popoverService.toggleContent();
  }
}
