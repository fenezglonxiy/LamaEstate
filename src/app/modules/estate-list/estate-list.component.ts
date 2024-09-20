import { Component } from '@angular/core';
import { EstateSearchComponent } from './estate-search/estate-search.component';
import { EstateLocationMapComponent } from './estate-location-map/estate-location-map.component';
import { EstateListItemComponent } from './estate-list-item/estate-list-item.component';

@Component({
  selector: 'app-estate-list',
  standalone: true,
  imports: [
    EstateSearchComponent,
    EstateLocationMapComponent,
    EstateListItemComponent,
  ],
  templateUrl: './estate-list.component.html',
  styleUrl: './estate-list.component.scss',
})
export class EstateListComponent {}
