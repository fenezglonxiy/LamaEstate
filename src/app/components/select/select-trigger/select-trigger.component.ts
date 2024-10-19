import { AfterViewInit, Component } from '@angular/core';
import { PopoverService, PopoverTriggerDirective } from '../../popover';
import { SelectService } from '../select.service';
import { SelectTriggerService } from './select-trigger.service';

@Component({
  selector: 'app-select-trigger',
  standalone: true,
  imports: [],
  templateUrl: './select-trigger.component.html',
  styleUrl: './select-trigger.component.scss',
  providers: [SelectTriggerService],
  hostDirectives: [PopoverTriggerDirective],
})
export class SelectTriggerComponent implements AfterViewInit {
  paddingBlock = 8;

  paddingInline = 12;

  borderWidth = 1;

  fontFamily = 'Lato';

  fontSize = 16;

  constructor(
    private _popoverService: PopoverService,
    private _selectService: SelectService,
    private _selectTriggerService: SelectTriggerService
  ) {
    this._selectTriggerService.fontFamily = 'Lato';
    this._selectTriggerService.fontSize = 16;
  }

  public get isContentShowed() {
    return this._popoverService.isContentShowed;
  }

  ngAfterViewInit(): void {
    this._selectService.maxTriggerWidth =
      this._selectTriggerService.longestLabelWidth +
      this.paddingInline * 2 +
      this.borderWidth * 2;
  }
}
