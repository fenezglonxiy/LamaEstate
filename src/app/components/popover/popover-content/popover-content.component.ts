import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperComponent } from '../../paper/paper.component';
import { PopoverContentDirective } from './popover-content.directive';

@Component({
  selector: 'app-popover-content',
  standalone: true,
  imports: [CommonModule, PaperComponent],
  templateUrl: './popover-content.component.html',
  styleUrl: './popover-content.component.scss',
  hostDirectives: [PopoverContentDirective],
})
export class PopoverContentComponent {}
