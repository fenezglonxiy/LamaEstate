import { Component } from '@angular/core';
import { PopoverContentComponent, PopoverService } from '../popover';
import { PortableService } from '../portable';
import { SelectService } from './select.service';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [PopoverContentComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [PortableService, PopoverService, SelectService],
})
export class SelectComponent {
  constructor(popoverService: PopoverService) {
    popoverService.anchorOrigin = {
      vertical: 'bottom',
      horizontal: 'left',
    };
  }
}
