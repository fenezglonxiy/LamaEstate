import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFillUpSpace]',
  standalone: true,
})
export class FillUpSpaceDirective implements OnInit {
  @Input()
  wFull = false;

  @Input()
  hFull = false;

  @HostBinding('style.display')
  private _display = 'block';

  @HostBinding('style.width')
  private _width = '';

  @HostBinding('style.height')
  private _height = '';

  ngOnInit() {
    if (this.wFull) {
      this._width = '100%';
    }

    if (this.hFull) {
      this._height = '100%';
    }
  }
}
