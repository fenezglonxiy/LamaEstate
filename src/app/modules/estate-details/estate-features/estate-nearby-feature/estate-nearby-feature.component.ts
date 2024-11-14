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
  selector: 'app-estate-nearby-feature',
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
  templateUrl: './estate-nearby-feature.component.html',
  styleUrl: './estate-nearby-feature.component.scss',
})
export class EstateNearbyFeatureComponent {
  readonly items = [
    {
      iconSrc: 'assets/school.svg#school',
      iconTitle: 'school icon',
      label: 'School',
      description: '250m away',
    },
    {
      iconSrc: 'assets/bus.svg#bus',
      iconTitle: 'bus icon',
      label: 'Bus Stop',
      description: '100m away',
    },
    {
      iconSrc: 'assets/restaurant.svg#restaurant',
      iconTitle: 'restaurant icon',
      label: 'Restaurant',
      description: '200m away',
    },
  ] as const;
}
