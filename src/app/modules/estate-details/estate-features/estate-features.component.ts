import { Component, HostBinding } from '@angular/core';
import { EstateGeneralFeatureComponent } from './estate-general-feature/estate-general-feature.component';
import { EstateSizeFeatureComponent } from './estate-size-feature/estate-size-feature.component';
import { EstateNearbyFeatureComponent } from './estate-nearby-feature/estate-nearby-feature.component';
import { EstateLocationFeatureComponent } from './estate-location-feature/estate-location-feature.component';
import { EstateCtaFeatureComponent } from './estate-cta-feature/estate-cta-feature.component';

@Component({
  selector: 'app-estate-features',
  standalone: true,
  imports: [
    EstateGeneralFeatureComponent,
    EstateSizeFeatureComponent,
    EstateNearbyFeatureComponent,
    EstateLocationFeatureComponent,
    EstateCtaFeatureComponent,
  ],
  templateUrl: './estate-features.component.html',
  styleUrl: './estate-features.component.scss',
})
export class EstateFeaturesComponent {
  @HostBinding('class')
  private _class = 'flow-spacer-y';
}
