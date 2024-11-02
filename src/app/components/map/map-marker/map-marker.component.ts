import {
  AfterContentInit,
  Component,
  ContentChild,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { latLng, Marker, marker, MarkerOptions } from 'leaflet';
import { MapService } from '../map.service';
import { MapPopupComponent } from '../map-popup/map-popup.component';

@Component({
  selector: 'app-map-marker',
  standalone: true,
  imports: [],
  templateUrl: './map-marker.component.html',
  styleUrl: './map-marker.component.scss',
})
export class MapMarkerComponent implements OnInit, AfterContentInit {
  @Input({ required: true })
  longitude = 0;

  @Input({ required: true })
  latitude = 0;

  @Input()
  altitude?: number;

  @Input()
  options?: MarkerOptions;

  private _mapService = inject(MapService);

  private _marker!: Marker;

  ngOnInit(): void {
    const newMarker = marker(
      latLng(this.latitude, this.longitude, this.altitude),
      this.options
    );

    this._marker = newMarker;
    this._mapService.addLayer(this._marker);
  }

  @ContentChild(MapPopupComponent)
  private _mapPopup?: MapPopupComponent;

  ngAfterContentInit(): void {
    if (this._mapPopup) {
      this._marker.bindPopup(this._mapPopup.popup);
    }
  }
}
