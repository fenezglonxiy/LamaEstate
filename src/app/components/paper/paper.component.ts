import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper',
  standalone: true,
  imports: [],
  templateUrl: './paper.component.html',
  styleUrl: './paper.component.scss',
})
export class PaperComponent implements OnInit {
  @Input()
  elevation: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24 = 0;

  @HostBinding('class')
  private _class = '';

  ngOnInit(): void {
    this._class = `elevation-${this.elevation}`;
  }
}
