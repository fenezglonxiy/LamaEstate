import { AfterViewInit, Component, Input, Signal } from '@angular/core';
import { SelectService } from '../select.service';
import { SelectTriggerService } from '../select-trigger/select-trigger.service';

@Component({
  selector: 'app-select-value',
  standalone: true,
  imports: [],
  templateUrl: './select-value.component.html',
  styleUrl: './select-value.component.scss',
})
export class SelectValueComponent implements AfterViewInit {
  $label: Signal<string> | undefined;

  constructor(
    private _selectService: SelectService,
    private _selectTriggerService: SelectTriggerService
  ) {
    this.$label = this._selectService.$label;
  }

  @Input()
  placeholder = '';

  ngAfterViewInit(): void {
    const longestLabel = this._selectService.longestLabel;
    const font = `${this._selectTriggerService.fontSize}px ${this._selectTriggerService.fontFamily}`;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (context && longestLabel) {
      context.font = font;
      const width = context.measureText(longestLabel).width;
      console.log(width);
      this._selectTriggerService.longestLabelWidth = Math.ceil(width);
    }
  }
}
