import { Component, inject, Input, OnInit } from '@angular/core';
import { PopoverService } from './popover.service';
import { PortableService } from '../portable';

export type TwoDimensionalOrigin = {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  providers: [PortableService, PopoverService],
})
export class PopoverComponent implements OnInit {
  private _popoverService = inject(PopoverService);

  @Input()
  anchorOrigin: TwoDimensionalOrigin = {
    vertical: 'top',
    horizontal: 'left',
  };

  @Input()
  transformOrigin: TwoDimensionalOrigin = {
    vertical: 'top',
    horizontal: 'left',
  };

  ngOnInit(): void {
    this._popoverService.anchorOrigin = this.anchorOrigin;
    this._popoverService.transformOrigin = this.transformOrigin;
  }
}
