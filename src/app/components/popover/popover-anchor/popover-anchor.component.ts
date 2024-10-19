import { Component } from '@angular/core';
import { PopoverAnchorDirective } from './popover-anchor.directive';

@Component({
  selector: 'app-popover-anchor',
  standalone: true,
  imports: [],
  templateUrl: './popover-anchor.component.html',
  styleUrl: './popover-anchor.component.scss',
  hostDirectives: [PopoverAnchorDirective],
})
export class PopoverAnchorComponent {}
