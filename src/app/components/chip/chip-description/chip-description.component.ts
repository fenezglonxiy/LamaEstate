import { Component, HostBinding, inject, Input } from '@angular/core';
import { TypographyComponent } from '../../typography';
import { ChipService } from '../chip.service';

@Component({
  selector: 'app-chip-description',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './chip-description.component.html',
  styleUrl: './chip-description.component.scss',
})
export class ChipDescriptionComponent {
  @Input()
  variant: TypographyComponent['variant'] = 'base';

  @Input()
  fontWeight: TypographyComponent['fontWeight'] = 'normal';

  @HostBinding('id')
  readonly id;

  private _chipService = inject(ChipService);

  constructor() {
    this.id = this._chipService.id;
  }
}
