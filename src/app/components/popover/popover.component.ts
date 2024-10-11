import { Component, inject, Input, OnInit } from '@angular/core';
import { PopoverService } from './popover.service';

export type MatrixOrigin = {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  providers: [PopoverService],
})
export class PopoverComponent implements OnInit {
  private _popoverService = inject(PopoverService);

  @Input()
  anchorOrigin: MatrixOrigin = {
    vertical: 'top',
    horizontal: 'left',
  };

  @Input()
  transformOrigin: MatrixOrigin = {
    vertical: 'top',
    horizontal: 'left',
  };

  ngOnInit(): void {
    this._popoverService.anchorOrigin = this.anchorOrigin;
    this._popoverService.transformOrigin = this.transformOrigin;
  }
}
