import { Component, HostBinding, inject, Input } from '@angular/core';
import { ChipService } from '../chip.service';
import { TypographyComponent } from '../../typography';

@Component({
  selector: 'app-chip-label',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './chip-label.component.html',
  styleUrl: './chip-label.component.scss',
})
export class ChipLabelComponent {
  @HostBinding('id')
  readonly id;

  @Input()
  variant: TypographyComponent['variant'] = 'base';

  @Input()
  fontWeight: TypographyComponent['fontWeight'] = 'normal';

  private _chipService = inject(ChipService);

  constructor() {
    this.id = this._chipService.chipLabelId;
  }
}
