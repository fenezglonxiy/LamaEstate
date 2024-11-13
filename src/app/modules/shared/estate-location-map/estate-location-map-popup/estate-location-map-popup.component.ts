import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypographyComponent } from '../../../../components/typography';
import { EstateLocationMapPopupInputs } from '../types';

@Component({
  selector: 'app-estate-location-map-popup',
  standalone: true,
  imports: [TypographyComponent, RouterModule],
  templateUrl: './estate-location-map-popup.component.html',
  styleUrl: './estate-location-map-popup.component.scss',
})
export class EstateLocationMapPopupComponent implements OnInit {
  @Input({ required: true })
  estateId: EstateLocationMapPopupInputs['estateId'] = '';

  @Input({ required: true })
  estateThumbnailSrc: EstateLocationMapPopupInputs['estateThumbnailSrc'] = '';

  @Input()
  estateThumbnailAlt: EstateLocationMapPopupInputs['estateThumbnailAlt'] = '';

  @Input({ required: true })
  estateName: EstateLocationMapPopupInputs['estateName'] = '';

  @Input({ required: true })
  estatePrice: EstateLocationMapPopupInputs['estatePrice'] = 0;

  @Input({ required: true })
  estateBedroomQuantity: EstateLocationMapPopupInputs['estateBedroomQuantity'] = 0;

  href = '';

  ngOnInit(): void {
    this.href = `/list/${this.estateId}`;
  }
}
