import { Component, Input, OnInit } from '@angular/core';
import { Layer, popup, Popup, PopupOptions } from 'leaflet';

@Component({
  selector: 'app-map-popup',
  standalone: true,
  imports: [],
  templateUrl: './map-popup.component.html',
  styleUrl: './map-popup.component.scss',
})
export class MapPopupComponent implements OnInit {
  @Input()
  options?: PopupOptions;

  @Input()
  source?: Layer;

  popup!: Popup;

  ngOnInit(): void {
    this.popup = popup(this.options, this.source);
  }
}
