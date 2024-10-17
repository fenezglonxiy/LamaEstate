import { Component } from '@angular/core';
import { PopoverContentRegistratorComponent } from '../../popover';

@Component({
  selector: 'app-select-content-registrator',
  standalone: true,
  imports: [],
  templateUrl: './select-content-registrator.component.html',
  styleUrl: './select-content-registrator.component.scss',
})
export class SelectContentRegistratorComponent extends PopoverContentRegistratorComponent {}
