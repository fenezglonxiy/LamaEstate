import { ElementRef, inject, Injectable } from '@angular/core';
import { PortableService } from '../portable/portable.service';
import { TwoDimensionalOrigin } from './popover.component';
import { EmbeddedViewParams } from '../../../types';

@Injectable()
export class PopoverService {
  private _portableService = inject(PortableService);

  private _trigger: ElementRef<any> | null = null;

  public get triggerElement() {
    if (this._trigger === null) {
      return null;
    }

    const element = this._trigger.nativeElement.cloneNode(true) as Element;
    return element;
  }

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

    const rect = this._trigger.nativeElement.getBoundingClientRect();

    return {
      x: rect.x,
      y: rect.y,
    };
  }

  public get triggerSize() {
    if (this._trigger === null) {
      return null;
    }

    const rect = this._trigger.nativeElement.getBoundingClientRect();

    return {
      width: rect.width,
      height: rect.height,
    };
  }

  toggleContent() {
    this._portableService.toggleContent();
  }

  registerTrigger(trigger: ElementRef<any>) {
    if (this._trigger === null) {
      this._trigger = trigger;
    }
  }

  registerContent<C>({ templateRef, context, options }: EmbeddedViewParams<C>) {
    this._portableService.registerContent(
      {
        templateRef,
        context,
        options,
      },
      true
    );
  }
}
