import { Component, inject, Input } from '@angular/core';
import { MapOptions } from 'leaflet';
import { MapService } from './map.service';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  providers: [MapService],
})
export class MapComponent {
  @Input({ required: true })
  options: MapOptions = {};

  private _mapService = inject(MapService);

  layers = this._mapService.layers;
}
