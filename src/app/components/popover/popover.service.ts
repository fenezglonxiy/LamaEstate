import { effect, Injectable, signal, TemplateRef } from '@angular/core';
import { PortableService } from '../portable/portable.service';

@Injectable()
export class PopoverService {
  private _$contentPopped = signal(false);

  content: TemplateRef<any> | null = null;

  constructor(portableService: PortableService) {
    effect(() => {
      if (this._$contentPopped() && this.content !== null) {
        portableService.attachTemplate(this.content);
      }
    });
  }

  toggleContent() {
    this._$contentPopped.update((prev) => !prev);
  }

  registerContent(content: TemplateRef<any>) {
    this.content = content;
  }
}
