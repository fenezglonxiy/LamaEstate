import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { RoomTagComponent } from './room-tag/room-tag.component';
import { FillUpSpaceDirective } from '../../../directives';
import { LinkComponent } from '../../../components/link';
import { TypographyComponent } from '../../../components/typography';
import { ButtonComponent } from '../../../components/button';
import { EstatePriceTagComponent } from '../../shared/estate-price-tag';
import { EstateAddressComponent } from '../../shared/estate-address';

@Component({
  selector: 'app-estate-list-item',
  standalone: true,
  imports: [
    TypographyComponent,
    RoomTagComponent,
    LinkComponent,
    FillUpSpaceDirective,
    ButtonComponent,
    EstatePriceTagComponent,
    EstateAddressComponent,
  ],
  templateUrl: './estate-list-item.component.html',
  styleUrl: './estate-list-item.component.scss',
})
export class EstateListItemComponent implements OnInit {
  @Input({ required: true })
  estateId = 0;

  @Input({ required: true })
  estateThumbnailSrc = '';

  @Input()
  estateThumbnailAlt = '';

  @Input({ required: true })
  estateName = '';

  @Input({ required: true })
  estateAddress = '';

  @Input({ required: true })
  estatePrice = 0;

  @Input({ required: true })
  estateBedroomQuantity = 0;

  @Input({ required: true })
  estateBathroomQuantity = 0;

  @HostBinding('role')
  private _role = 'listitem';

  href = '';

  ngOnInit(): void {
    this.href = `/list/${this.estateId}`;
  }
}
