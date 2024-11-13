import { Component } from '@angular/core';
import { EstateSearchComponent } from './estate-search/estate-search.component';
import {
  PaginationComponent,
  PaginationContentComponent,
  PaginationEllipsisComponent,
  PaginationGotoComponent,
  PaginationItemComponent,
  PaginationLinkComponent,
  PaginationNextComponent,
  PaginationPreviousComponent,
} from '../../components/pagination';
import { estateData } from './dummy-data';
import { EstateListItemComponent } from './estate-list-item';
import {
  EstateLocation,
  EstateLocationMapComponent,
} from '../shared/estate-location-map';

@Component({
  selector: 'app-estate-list',
  standalone: true,
  imports: [
    EstateSearchComponent,
    EstateListItemComponent,
    PaginationComponent,
    PaginationContentComponent,
    PaginationItemComponent,
    PaginationPreviousComponent,
    PaginationNextComponent,
    PaginationGotoComponent,
    EstateLocationMapComponent,
  ],
  templateUrl: './estate-list.component.html',
  styleUrl: './estate-list.component.scss',
})
export class EstateListComponent {
  estateData = estateData.slice(0, 5);

  mapCenter = {
    latitude: 51.5074,
    longitude: -0.1278,
  };

  mapLocations: Array<EstateLocation> = estateData.slice(0, 5).map((item) => ({
    estateId: item.id,
    latitude: item.latitude,
    longitude: item.longitude,
    estateThumbnailSrc: item.thumbnailSrc,
    estateThumbnailAlt: '',
    estateName: item.name,
    estatePrice: item.price,
    estateBedroomQuantity: item.bedroomQuantity,
  }));
}
