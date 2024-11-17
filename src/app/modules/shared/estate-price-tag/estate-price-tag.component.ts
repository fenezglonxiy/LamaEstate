import { Component, Input } from '@angular/core';
import {
  ChipComponent,
  ChipLabelComponent,
  ChipLabelContentComponent,
} from '../../../components/chip';

@Component({
  selector: 'app-estate-price-tag',
  standalone: true,
  imports: [ChipComponent, ChipLabelContentComponent, ChipLabelComponent],
  templateUrl: './estate-price-tag.component.html',
  styleUrl: './estate-price-tag.component.scss',
})
export class EstatePriceTagComponent {
  @Input()
  currency: 'dollar' = 'dollar';

  @Input()
  estatePrice: number | undefined;

  currencySymbol = '$';
}
