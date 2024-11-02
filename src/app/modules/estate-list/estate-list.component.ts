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
import { EstateLocationMapComponent } from './estate-location-map';
import { EstateListItemComponent } from './estate-list-item';

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
    PaginationLinkComponent,
    PaginationNextComponent,
    PaginationEllipsisComponent,
    PaginationGotoComponent,
    EstateLocationMapComponent,
  ],
  templateUrl: './estate-list.component.html',
  styleUrl: './estate-list.component.scss',
})
export class EstateListComponent {
  estateData = estateData.slice(0, 5);
}
