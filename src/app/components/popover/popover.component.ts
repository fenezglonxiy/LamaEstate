import { Component } from '@angular/core';
import { PopoverService } from './popover.service';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  providers: [PopoverService],
})
export class PopoverComponent {}
