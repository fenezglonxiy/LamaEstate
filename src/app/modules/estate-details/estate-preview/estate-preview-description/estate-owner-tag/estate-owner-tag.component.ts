import { Component, Input } from '@angular/core';
import {
  ChipComponent,
  ChipIconContentComponent,
  ChipLabelComponent,
  ChipLabelContentComponent,
} from '../../../../../components/chip';
import { SvgIconComponent } from '../../../../../components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-estate-preview-description-owner-tag',
  standalone: true,
  imports: [
    ChipComponent,
    ChipIconContentComponent,
    ChipLabelContentComponent,
    ChipLabelComponent,
    SvgIconComponent,
  ],
  templateUrl: './estate-owner-tag.component.html',
  styleUrl: './estate-owner-tag.component.scss',
})
export class EstateOwnerTagComponent {
  @Input({ required: true })
  ownerImageSrc = '';

  @Input({ required: true })
  ownerName = '';
}
