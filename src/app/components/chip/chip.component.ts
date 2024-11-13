import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ChipService } from './chip.service';
import { spacingInPx } from '../../helpers';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  providers: [ChipService],
})
export class ChipComponent implements OnInit {
  @Input()
  variant: 'contained' | 'outlined' = 'contained';

  @Input()
  spacing = 1.25;

  private get spacingInPx() {
    return spacingInPx(this.spacing);
  }

  @Input()
  orientation: 'vertical' | 'horizontal' = 'horizontal';

  @Input()
  size: 'base' | 'large' = 'base';

  @HostBinding('class')
  class = '';

  @HostBinding('attr.aria-describedby')
  readonly ariaDescribeby;

  @HostBinding('attr.aria-labelledby')
  readonly ariaLabelledby;

  private _chipService = inject(ChipService);

  private _elementRef = inject(ElementRef);

  private _renderer = inject(Renderer2);

  constructor() {
    this.ariaDescribeby = this._chipService.chipDescriptionId;
    this.ariaLabelledby = this._chipService.chipLabelId;
  }

  ngOnInit(): void {
    const baseClassName = 'app-chip';
    let sizeClassName = `${baseClassName}-base`;

    if (this.size !== 'base') {
      sizeClassName = `${baseClassName}-${this.orientation}-${this.size}`;
    }

    this.class = `${baseClassName}-${this.variant} ${baseClassName}-${this.orientation} ${sizeClassName}`;

    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'gap',
      `${this.spacingInPx}px`
    );
  }
}
