import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { PopoverService } from './popover.service';

export type TwoDimensionalOrigin = {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  providers: [PopoverService],
})
export class PopoverComponent implements OnInit, AfterViewInit {
  private _popoverService = inject(PopoverService);

  @ViewChild('tmplContent', { read: TemplateRef, static: true })
  private _content!: TemplateRef<any>;

  @Input()
  anchorOrigin: TwoDimensionalOrigin = {
    vertical: 'top',
    horizontal: 'left',
  };

  @Input()
  transformOrigin: TwoDimensionalOrigin = {
    vertical: 'top',
    horizontal: 'left',
  };

  ngOnInit(): void {
    this._popoverService.anchorOrigin = this.anchorOrigin;
    this._popoverService.transformOrigin = this.transformOrigin;
  }

  ngAfterViewInit(): void {
    this._popoverService.registerContent({ templateRef: this._content });
  }
}
