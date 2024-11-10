import { Component, Input } from '@angular/core';
import { TypographyComponent } from '../../../components/typography';

@Component({
  selector: 'app-estate-address',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './estate-address.component.html',
  styleUrl: './estate-address.component.scss',
})
export class EstateAddressComponent {
  @Input({ required: true })
  address = '';
}
