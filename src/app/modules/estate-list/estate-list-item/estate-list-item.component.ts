import { Component, HostBinding } from '@angular/core';
import { PriceTagComponent } from './price-tag/price-tag.component';
import { RoomTagComponent } from './room-tag/room-tag.component';
import { FillUpSpaceDirective } from '../../../directives';
import { LinkComponent } from '../../../components/link';
import { TypographyComponent } from '../../../components/typography';
import { ButtonComponent } from '../../../components/button';

@Component({
  selector: 'app-estate-list-item',
  standalone: true,
  imports: [
    TypographyComponent,
    PriceTagComponent,
    RoomTagComponent,
    LinkComponent,
    FillUpSpaceDirective,
    ButtonComponent,
  ],
  templateUrl: './estate-list-item.component.html',
  styleUrl: './estate-list-item.component.scss',
})
export class EstateListItemComponent {
  @HostBinding('role')
  private _role = 'listitem';
}
