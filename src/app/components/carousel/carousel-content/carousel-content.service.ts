import { ElementRef, Injectable } from '@angular/core';
import { CarouselItemMetadata } from '../types';

@Injectable()
export class CarouselContentService {
  public get items() {
    return this._items;
  }

  public get itemElements() {
    return this._itemElements;
  }

  private _itemElements: Array<ElementRef> = [];

  private _items: Array<CarouselItemMetadata> = [];

  registerItem(elementRef: ElementRef, caption: string) {
    const index = this._items.length;
    this._itemElements.push(elementRef);
    this._items.push({ index, caption });
    return index;
  }
}
