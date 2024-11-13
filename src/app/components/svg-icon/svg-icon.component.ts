import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss',
})
export class SvgIconComponent implements OnInit {
  @Input({ required: true })
  svgSpriteHref = '';

  @Input({ alias: 'id' })
  idFromInput = '';

  @Input()
  title = '';

  @Input()
  description = '';

  @Input()
  size: 'sm' | 'base' = 'base';

  private readonly _pxValueBySize = {
    sm: 16,
    base: 24,
  } as const;

  @Input({ alias: 'width' })
  widthFromInput = '';

  @Input({ alias: 'height' })
  heightFromInput = '';

  @Input({ alias: 'viewBox' })
  viewBoxFromInput = '';

  titleId = '';

  descId = '';

  id = '';

  width = '';

  height = '';

  viewBox = '';

  ngOnInit(): void {
    const id = this.idFromInput === '' ? uuid() : this.idFromInput;
    const svgIconId =
      this.idFromInput === '' ? `${id}-svg-icon` : this.idFromInput;
    this.id = svgIconId;
    this.titleId = `${id}-svg-title`;
    this.descId = `${id}-svg-desc`;

    const sizeInPx = this._pxValueBySize[this.size];
    this.width = `${sizeInPx}`;
    this.height = `${sizeInPx}`;
    this.viewBox = `0 0 ${this.width} ${this.height}`;

    if (this.widthFromInput !== '') {
      this.width = this.widthFromInput;
    }

    if (this.heightFromInput !== '') {
      this.height = this.heightFromInput;
    }

    if (this.viewBoxFromInput !== '') {
      this.viewBox = this.viewBoxFromInput;
    }
  }
}
