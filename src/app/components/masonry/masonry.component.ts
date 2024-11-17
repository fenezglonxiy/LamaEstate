import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  QueryList,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';
import { replaceNonPositiveNumber, spacingInPx } from '../../helpers';
import { MasonryItemComponent } from './masonry-item/masonry-item.component';
import { PriorityQueue } from '../../../types';

@Component({
  selector: 'app-masonry',
  standalone: true,
  imports: [],
  templateUrl: './masonry.component.html',
  styleUrl: './masonry.component.scss',
})
export class MasonryComponent implements AfterContentInit, OnDestroy {
  @Input({ required: true, transform: fallbackToDefaultNumberColumns })
  columns = 0;

  @Input()
  spacing = 1;

  public get spacingInPx() {
    return spacingInPx(this.spacing);
  }

  @ContentChildren(MasonryItemComponent)
  private _items: QueryList<MasonryItemComponent> | undefined;

  private _itemBaseHeights: Array<number> = [];

  private _baseHeight = 0;

  private _elementRef = inject(ElementRef);

  private _renderer = inject(Renderer2);

  private _resizeObserver: ResizeObserver | undefined;

  private _columnBaseHeights: Array<number> = [];

  ngAfterContentInit(): void {
    if (!this._items) {
      return;
    }

    this._columnBaseHeights = Array<number>(this.columns).fill(0);

    this._setupItems();

    this._setupColumnBreaks();

    let maxColumnBaseHeight = 0;

    for (const columnBaseHeight of this._columnBaseHeights) {
      maxColumnBaseHeight = Math.max(maxColumnBaseHeight, columnBaseHeight);
    }

    this._baseHeight = maxColumnBaseHeight;

    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'height',
      `calc(${maxColumnBaseHeight + 2 * this.spacingInPx}px`
    );

    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'margin',
      `calc(-${this.spacingInPx}px)`
    );

    this._setupObserver();
  }

  private _setupObserver() {
    if (!this._items) {
      return;
    }

    const callBackFn: ResizeObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          const itemIndex = Number.parseInt(
            entry.target.getAttribute('data-index') as string,
            10
          );
          const columnIndex = Number.parseInt(
            entry.target.getAttribute('data-order') as string,
            10
          );

          if (Number.isNaN(itemIndex) || Number.isNaN(columnIndex)) {
            return;
          }

          const contentBoxSize = entry.contentBoxSize[0];
          const height =
            this._columnBaseHeights[columnIndex] +
            contentBoxSize.blockSize -
            this._itemBaseHeights[itemIndex];

          if (height > this._baseHeight) {
            this._renderer.setStyle(
              this._elementRef.nativeElement,
              'height',
              `${height}px`
            );
          }
        }
      }
    };

    this._resizeObserver = new ResizeObserver(callBackFn.bind(this));

    for (const item of this._items) {
      this._resizeObserver.observe(item.elementRef.nativeElement);
    }
  }

  private _setupColumnBreaks() {
    for (let i = 0; i < this.columns - 1; i++) {
      const columnBreakElement = document.createElement('span');
      columnBreakElement.setAttribute('data-role', 'column-break');
      columnBreakElement.style.flexBasis = '100%';
      columnBreakElement.style.width = '0';
      columnBreakElement.style.margin = '0';
      columnBreakElement.style.padding = '0';
      columnBreakElement.style.order = `${i + 1}`;
      this._renderer.appendChild(
        this._elementRef.nativeElement,
        columnBreakElement
      );
    }
  }

  private _setupItems() {
    if (!this._items) {
      return;
    }

    const pqComparisonFn = (i: number, j: number) => {
      return this._columnBaseHeights[i] === this._columnBaseHeights[j]
        ? i - j
        : this._columnBaseHeights[i] - this._columnBaseHeights[j];
    };

    const pq = new PriorityQueue<number>(pqComparisonFn.bind(this));

    for (let i = 0; i < this.columns; i++) {
      pq.add(i);
    }

    const itemMarginBlock = 2 * this.spacingInPx;

    const itemMarginStyle = `${this.spacingInPx}px`;

    const itemWidthStyle = `calc(100% / ${this.columns} - 2 * ${itemMarginStyle})`;

    for (let i = 0; i < this._items.length; i++) {
      const item = this._items.get(i) as NonNullable<MasonryItemComponent>;
      const columnIndex = pq.poll() as number;
      const order = item.order === undefined ? columnIndex + 1 : item.order;
      const itemElement = item.elementRef.nativeElement;
      this._itemBaseHeights.push(itemElement.clientHeight);
      this._renderer.setAttribute(itemElement, 'data-index', `${i}`);
      this._renderer.setAttribute(itemElement, 'data-order', `${order}`);
      this._renderer.setStyle(
        itemElement,
        '--margin',
        itemMarginStyle,
        RendererStyleFlags2.DashCase
      );
      this._renderer.setStyle(itemElement, 'margin', itemMarginStyle);
      this._renderer.setStyle(itemElement, 'width', itemWidthStyle);
      this._renderer.setStyle(itemElement, 'order', `${order}`);
      this._columnBaseHeights[columnIndex] +=
        itemElement.clientHeight + itemMarginBlock;
      pq.add(columnIndex);
    }
  }

  ngOnDestroy(): void {
    if (!this._resizeObserver || !this._items) {
      return;
    }

    for (const item of this._items) {
      this._resizeObserver.unobserve(item.elementRef.nativeElement);
    }
  }
}

function fallbackToDefaultNumberColumns(value: number) {
  return replaceNonPositiveNumber(value, 1);
}
