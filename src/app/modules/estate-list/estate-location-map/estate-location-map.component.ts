import { Component, inject } from '@angular/core';
import { icon, latLng, Point, tileLayer } from 'leaflet';
import {
  MapComponent,
  MapMarkerComponent,
  MapPopupComponent,
} from '../../../components/map';
import { EstateLocationMapPopupService } from './estate-location-map-popup/estate-location-map-popup.service';
import { estateData } from '../dummy-data';

@Component({
  selector: 'app-estate-location-map',
  standalone: true,
  imports: [MapComponent, MapMarkerComponent, MapPopupComponent],
  templateUrl: './estate-location-map.component.html',
  styleUrl: './estate-location-map.component.scss',
  providers: [EstateLocationMapPopupService],
})
export class EstateLocationMapComponent {
  private readonly _markerIconUrl = 'assets/marker-icon.png';
  private readonly _markerIconRetinaUrl = 'assets/marker-icon-2x.png';
  private readonly _markerShadowUrl = 'assets/marker-shadow.png';
  private _estateLocationMapPopupService = inject(
    EstateLocationMapPopupService
  );

  estateData = estateData.slice(0, 5);

  map = {
    options: {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '...',
        }),
      ],
      scrollWheelZoom: false,
      zoom: 12,
      center: latLng(53.4084, -2.9916),
    },
  };

  private readonly _popupOffset = new Point(0, -30);

  private readonly _popupMinWidth = 200;

  popups = this.estateData.map((item) => ({
    options: {
      content: this._estateLocationMapPopupService.createPopup(
        item.id,
        item.thumbnailSrc,
        '',
        item.name,
        item.price,
        item.bedroomQuantity
      ),
      offset: this._popupOffset,
      minWidth: this._popupMinWidth,
    },
  }));

  markers = this.estateData.map((item) => ({
    id: item.id,
    latitude: item.latitude,
    longitude: item.longitude,
    options: {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: this._markerIconUrl,
        iconRetinaUrl: this._markerIconRetinaUrl,
        shadowUrl: this._markerShadowUrl,
      }),
    },
  }));
}
