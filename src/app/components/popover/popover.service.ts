import {
  effect,
  ElementRef,
  Injectable,
  signal,
  TemplateRef,
} from '@angular/core';
import { PortableService } from '../portable/portable.service';
import { MatrixOrigin } from './popover.component';

@Injectable()
export class PopoverService {
  private _$contentPopped = signal(false);

  private _trigger: ElementRef<any> | null = null;

  private _content: TemplateRef<any> | null = null;

  public anchorOrigin: MatrixOrigin = {
    vertical: 'top',
    horizontal: 'left',
  };

  public transformOrigin: MatrixOrigin = {
    vertical: 'top',
    horizontal: 'left',
  };

  public get triggerPosition() {
    if (this._trigger === null) {
      return null;
    }

    return {
      offsetTop: this._trigger.nativeElement.offsetTop,
      offsetLeft: this._trigger.nativeElement.offsetLeft,
    };
  }

  public get triggerSize() {
    if (this._trigger === null) {
      return null;
    }

    return {
      width: this._trigger.nativeElement.offsetWidth,
      height: this._trigger.nativeElement.offsetHeight,
    };
  }

  constructor(portableService: PortableService) {
    effect(() => {
      if (this._content === null) {
        return;
      }

      if (this._$contentPopped()) {
        portableService.attachTemplate(this._content);
      } else {
        portableService.detachTemplate();
      }
    });
  }

  toggleContent() {
    this._$contentPopped.update((prev) => !prev);
  }

  registerTrigger(trigger: ElementRef<any>) {
    this._trigger = trigger;
  }

  registerContent(content: TemplateRef<any>) {
    this._content = content;
  }
}
