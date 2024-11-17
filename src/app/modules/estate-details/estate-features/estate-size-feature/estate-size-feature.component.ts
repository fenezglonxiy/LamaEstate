import { Component } from '@angular/core';
import { EstateFeatureComponent } from '../estate-feature/estate-feature.component';
import {
  ChipComponent,
  ChipIconContentComponent,
  ChipLabelComponent,
  ChipLabelContentComponent,
} from '../../../../components/chip';
import { SvgIconComponent } from '../../../../components/svg-icon';

@Component({
  selector: 'app-estate-size-feature',
  standalone: true,
  imports: [
    EstateFeatureComponent,
    ChipComponent,
    ChipIconContentComponent,
    ChipLabelContentComponent,
    ChipLabelComponent,
    SvgIconComponent,
  ],
  templateUrl: './estate-size-feature.component.html',
  styleUrl: './estate-size-feature.component.scss',
})
export class EstateSizeFeatureComponent {
  readonly items = [
    {
      iconSrc: 'assets/size.svg#size',
      iconTitle: 'size icon',
      label: '80sqm (861sqft)',
    },
    {
      iconSrc: 'assets/bed.svg#bed',
      iconTitle: 'bed icon',
      label: '2 bedroom',
    },
    {
      iconSrc: 'assets/bath.svg#bath',
      iconTitle: 'bath icon',
      label: '1 bathroom',
    },
  ] as const;
}
