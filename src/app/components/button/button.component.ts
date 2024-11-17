import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { generateClassName, spacingInPx } from '../../helpers';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input()
  variant: 'contained' | 'outlined' | 'ghost' | 'text' | undefined;

  @Input()
  color: 'primary' | 'secondary' | undefined;

  @Input()
  size: 'sm' | 'base' | 'icon' | 'icon-md' | 'icon-lg' | 'auto' | undefined;

  @Input()
  spacing = 2;

  public get spacingInPx() {
    return spacingInPx(this.spacing);
  }

  @Input()
  wFull = false;

  @Input()
  hFull = false;

  @Input()
  type: 'submit' | 'button' = 'button';

  @HostBinding('attr.aria-disabled')
  @Input()
  disabled = false;

  className = '';

  gapStyle = '';

  ngOnInit(): void {
    const baseName = 'app-button';
    let variantClassName = '';
    let colorClassName = '';

    if (this.variant !== undefined) {
      variantClassName = `${this.variant}`;

      if (this.color !== undefined) {
        colorClassName = `${this.variant}-${this.color}`;
      }
    }

    let sizeClassName = '';

    if (this.size !== undefined) {
      sizeClassName = `${this.size}`;
    }

    let wFullClassName = '';

    if (this.wFull) {
      wFullClassName = 'w-full';
    }

    let hFullClassName = '';

    if (this.hFull) {
      hFullClassName = 'h-full';
    }

    this.className = generateClassName(baseName, [
      variantClassName,
      colorClassName,
      sizeClassName,
      wFullClassName,
      hFullClassName,
    ]);

    this.gapStyle = `${this.spacingInPx}px`;
  }
}
