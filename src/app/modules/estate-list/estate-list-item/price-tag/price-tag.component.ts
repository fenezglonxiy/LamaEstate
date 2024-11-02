import { Component, Input } from '@angular/core';
import { TypographyComponent } from '../../../../components/typography';
import {
  ChipComponent,
  ChipLabelComponent,
  ChipLabelContentComponent,
} from '../../../../components/chip';

@Component({
  selector: 'app-estate-list-item-price-tag',
  standalone: true,
  imports: [
    TypographyComponent,
    ChipComponent,
    ChipLabelComponent,
    ChipLabelContentComponent,
  ],
  templateUrl: './price-tag.component.html',
  styleUrl: './price-tag.component.scss',
})
export class PriceTagComponent {
  @Input()
  price: number | undefined;
}
