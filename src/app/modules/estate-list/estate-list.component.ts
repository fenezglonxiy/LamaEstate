import { Component } from '@angular/core';
import { EstateSearchComponent } from './estate-search/estate-search.component';
import { EstateLocationMapComponent } from './estate-location-map/estate-location-map.component';
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
import { EstateListItemComponent } from './estate-list-item/estate-list-item.component';
import { estateData } from './dummy-data';

@Component({
  selector: 'app-estate-list',
  standalone: true,
  imports: [
    EstateSearchComponent,
    EstateLocationMapComponent,
    EstateListItemComponent,
    PaginationComponent,
    PaginationContentComponent,
    PaginationItemComponent,
    PaginationPreviousComponent,
    PaginationLinkComponent,
    PaginationNextComponent,
    PaginationEllipsisComponent,
    PaginationGotoComponent,
  ],
  templateUrl: './estate-list.component.html',
  styleUrl: './estate-list.component.scss',
})
export class EstateListComponent {
  estateData = estateData.slice(0, 5);
}
