import { Component } from '@angular/core';
import { EstateFeatureComponent } from '../estate-feature/estate-feature.component';
import {
  EstateLocation,
  EstateLocationMapComponent,
} from '../../../shared/estate-location-map';

@Component({
  selector: 'app-estate-location-feature',
  standalone: true,
  imports: [EstateFeatureComponent, EstateLocationMapComponent],
  templateUrl: './estate-location-feature.component.html',
  styleUrl: './estate-location-feature.component.scss',
})
export class EstateLocationFeatureComponent {
  location: Array<EstateLocation> = [
    {
      estateId: '1',
      estateName: 'A Great Apartment Next to the Beach!',
      estateThumbnailSrc:
        'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      estateBedroomQuantity: 2,
      estatePrice: 1000,
      latitude: 51.5074,
      longitude: -0.1278,
    },
  ];
}
