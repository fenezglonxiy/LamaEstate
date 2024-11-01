import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkComponent } from '../../../../components/link';
import { TypographyComponent } from '../../../../components/typography';

@Component({
  selector: 'app-estate-location-map-popup',
  standalone: true,
  imports: [LinkComponent, TypographyComponent, RouterModule],
  templateUrl: './estate-location-map-popup.component.html',
  styleUrl: './estate-location-map-popup.component.scss',
})
export class EstateLocationMapPopupComponent implements OnInit {
  @Input({ required: true })
  estateId = 0;

  @Input({ required: true })
  estateThumbnailSrc = '';

  @Input()
  estateThumbnailAlt = '';

  @Input({ required: true })
  estateName = '';

  @Input({ required: true })
  estatePrice = 0;

  @Input({ required: true })
  estateBedroomQuantity = 0;

  href = '';

  ngOnInit(): void {
    this.href = `/list/${this.estateId}`;
  }
}
