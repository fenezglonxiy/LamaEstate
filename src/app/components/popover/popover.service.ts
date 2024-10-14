import { ElementRef, inject, Injectable } from '@angular/core';
import { PortableService } from '../portable/portable.service';
import { TwoDimensionalOrigin } from './popover.component';
import { EmbeddedViewParams } from '../../../types';

@Injectable()
export class PopoverService {
  private _portableService = inject(PortableService);

  private _trigger: ElementRef<any> | null = null;

  public anchorOrigin: TwoDimensionalOrigin = {
    vertical: 'top',
    horizontal: 'left',
  };

  public transformOrigin: TwoDimensionalOrigin = {
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

  toggleContent() {
    this._portableService.toggleContent();
  }

  registerTrigger(trigger: ElementRef<any>) {
    this._trigger = trigger;
  }

  registerContent<C>(params: EmbeddedViewParams<C>) {
    this._portableService.registerContent(params, true);
  }
}
