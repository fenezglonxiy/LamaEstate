import { Injectable } from '@angular/core';
import { Layer } from 'leaflet';

@Injectable()
export class MapService {
  layers: Array<Layer> = [];

  addLayer(layer: Layer) {
    this.layers.push(layer);
  }
}
