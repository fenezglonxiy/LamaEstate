import { Component } from '@angular/core';
import { PopoverTriggerDirective } from '../../popover';

@Component({
  selector: 'app-select-trigger',
  standalone: true,
  imports: [],
  templateUrl: './select-trigger.component.html',
  styleUrl: './select-trigger.component.scss',
  hostDirectives: [PopoverTriggerDirective],
})
export class SelectTriggerComponent {}
