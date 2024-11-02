import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { TypographyComponent } from '../typography/typography.component';
import { ChipService } from './chip.service';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule, TypographyComponent],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  providers: [ChipService],
})
export class ChipComponent implements OnInit {
  @Input()
  variant: 'contained' | 'outlined' = 'contained';

  @Input()
  orientation: 'vertical' | 'horizontal' = 'horizontal';

  @HostBinding('class')
  class = '';

  @HostBinding('attr.aria-describedby')
  readonly ariaDescribeby;

  @HostBinding('attr.aria-labelledby')
  readonly ariaLabelledby;

  private _chipService = inject(ChipService);

  constructor() {
    this.ariaDescribeby = this._chipService.chipDescriptionId;
    this.ariaLabelledby = this._chipService.chipLabelId;
  }

  ngOnInit(): void {
    const baseClassName = 'app-chip';
    this.class = `${baseClassName}-${this.variant} ${baseClassName}-${this.orientation}`;
  }
}
