import { Component } from '@angular/core';
import { PopoverContentRegistratorComponent } from '../../popover';
import { PopoverAnchorComponent } from '../../popover/popover-anchor/popover-anchor.component';

@Component({
  selector: 'app-select-content-registrator',
  standalone: true,
  imports: [PopoverAnchorComponent],
  templateUrl: './select-content-registrator.component.html',
  styleUrl: './select-content-registrator.component.scss',
})
export class SelectContentRegistratorComponent extends PopoverContentRegistratorComponent {}
