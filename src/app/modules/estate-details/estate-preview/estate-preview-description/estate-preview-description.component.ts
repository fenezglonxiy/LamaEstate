import { Component } from '@angular/core';
import { TypographyComponent } from '../../../../components/typography';
import { EstatePriceTagComponent } from '../../../shared/estate-price-tag';
import { EstateAddressComponent } from '../../../shared/estate-address';
import { EstateOwnerTagComponent } from './estate-owner-tag/estate-owner-tag.component';

@Component({
  selector: 'app-estate-preview-description',
  standalone: true,
  imports: [
    TypographyComponent,
    EstatePriceTagComponent,
    EstateAddressComponent,
    EstateOwnerTagComponent,
  ],
  templateUrl: './estate-preview-description.component.html',
  styleUrl: './estate-preview-description.component.scss',
})
export class EstatePreviewDescriptionComponent {}
