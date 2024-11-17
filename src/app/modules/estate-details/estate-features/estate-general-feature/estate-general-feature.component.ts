import { Component } from '@angular/core';
import { EstateFeatureComponent } from '../estate-feature/estate-feature.component';
import {
  ChipComponent,
  ChipDescriptionComponent,
  ChipIconContentComponent,
  ChipLabelComponent,
  ChipLabelContentComponent,
} from '../../../../components/chip';
import { SvgIconComponent } from '../../../../components/svg-icon';

@Component({
  selector: 'app-estate-general-feature',
  standalone: true,
  imports: [
    EstateFeatureComponent,
    ChipComponent,
    ChipIconContentComponent,
    ChipLabelContentComponent,
    ChipLabelComponent,
    ChipDescriptionComponent,
    SvgIconComponent,
  ],
  templateUrl: './estate-general-feature.component.html',
  styleUrl: './estate-general-feature.component.scss',
})
export class EstateGeneralFeatureComponent {
  readonly items = [
    {
      iconSrc: 'assets/utility.svg#utility',
      iconTitle: 'utility icon',
      label: 'Utilities',
      description: 'Renter is responsible',
    },
    {
      iconSrc: 'assets/pet.svg#pet',
      iconTitle: 'pet icon',
      label: 'Pet Policy',
      description: 'Pet allowed',
    },
    {
      iconSrc: 'assets/fee.svg#fee',
      iconTitle: 'fee icon',
      label: 'Property Fees',
      description: 'Must have 3x the rent in total household income',
    },
  ] as const;
}
