import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { PopoverService } from '../popover.service';
import { CommonModule } from '@angular/common';
import { PaperComponent } from '../../paper/paper.component';

@Component({
  selector: 'app-popover-content',
  standalone: true,
  imports: [CommonModule, PaperComponent],
  templateUrl: './popover-content.component.html',
  styleUrl: './popover-content.component.scss',
})
export class PopoverContentComponent implements AfterViewInit {
  private _popoverService = inject(PopoverService);

  @ViewChild('tmplContent', { static: true })
  private _tmplContent!: TemplateRef<any>;

  anchor = {
    top: 0,
    left: 0,
  };

  transform = {
    x: 0,
    y: 0,
  };

  ngAfterViewInit(): void {
    this._popoverService.registerContent(this._tmplContent);
    this.calculateAnchor();
    this.calculateTransform();
  }

  calculateAnchor(): void {
    const anchorOrigin = this._popoverService.anchorOrigin;
    const triggerPos = this._popoverService.triggerPosition;
    const triggerSize = this._popoverService.triggerSize;

    switch (anchorOrigin.vertical) {
      case 'top':
        this.anchor.top = triggerPos?.offsetTop;
        break;
      case 'center':
        this.anchor.top = triggerPos?.offsetTop + triggerSize?.height / 2;
        break;
      case 'bottom':
        this.anchor.top = triggerPos?.offsetTop + triggerSize?.height;
        break;
    }

    switch (anchorOrigin.horizontal) {
      case 'left':
        this.anchor.left = triggerPos?.offsetLeft;
        break;
      case 'center':
        this.anchor.left = triggerPos?.offsetLeft + triggerSize?.width / 2;
        break;
      case 'right':
        this.anchor.left = triggerPos?.offsetLeft + triggerSize?.width;
        break;
    }
  }

  calculateTransform(): void {
    const transformOrigin = this._popoverService.transformOrigin;

    switch (transformOrigin.vertical) {
      case 'top':
        this.transform.y = 0;
        break;
      case 'center':
        this.transform.y = -50;
        break;
      case 'bottom':
        this.transform.y = -100;
        break;
    }

    switch (transformOrigin.horizontal) {
      case 'left':
        this.transform.x = 0;
        break;
      case 'center':
        this.transform.x = -50;
        break;
      case 'right':
        this.transform.x = -100;
        break;
    }
  }
}
