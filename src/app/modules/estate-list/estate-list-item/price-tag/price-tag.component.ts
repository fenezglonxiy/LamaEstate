import { Component, Input } from '@angular/core';
import { TypographyComponent } from '../../../../components/typography';

@Component({
  selector: 'app-estate-list-item-price-tag',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './price-tag.component.html',
  styleUrl: './price-tag.component.scss',
})
export class PriceTagComponent {
  @Input()
  price: number | undefined;
}
