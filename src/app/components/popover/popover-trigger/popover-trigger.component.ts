import { Component } from '@angular/core';
import { PopoverTriggerDirective } from './popover-trigger.directive';

@Component({
  selector: 'app-popover-trigger',
  standalone: true,
  imports: [],
  templateUrl: './popover-trigger.component.html',
  styleUrl: './popover-trigger.component.scss',
  hostDirectives: [PopoverTriggerDirective],
})
export class PopoverTriggerComponent {}
