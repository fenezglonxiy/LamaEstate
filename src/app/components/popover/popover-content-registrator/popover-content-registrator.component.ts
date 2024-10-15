import {
  AfterViewInit,
  Component,
  inject,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { PopoverService } from '../popover.service';

@Component({
  selector: 'app-popover-content-registrator',
  standalone: true,
  imports: [],
  templateUrl: './popover-content-registrator.component.html',
  styleUrl: './popover-content-registrator.component.scss',
})
export class PopoverContentRegistratorComponent implements AfterViewInit {
  private _popoverService = inject(PopoverService);

  @ViewChild('tmplContent', { read: TemplateRef, static: true })
  private _content!: TemplateRef<any>;

  ngAfterViewInit(): void {
    this._popoverService.registerContent({
      templateRef: this._content,
    });
  }
}
