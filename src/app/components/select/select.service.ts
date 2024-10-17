import { Injectable, Signal } from '@angular/core';

@Injectable()
export class SelectService {
  $value: Signal<any> | undefined;

  onSelect: ((value: any) => void) | undefined;
}
