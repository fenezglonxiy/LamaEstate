import { Component, Input, OnInit } from '@angular/core';
import { spacingInPx } from '../../helpers';

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
  color: 'primary' | 'secondary' = 'primary';

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

  @Input()
  disabled = false;

  className = '';

  gapStyle = '';

  ngOnInit(): void {
    const baseName = 'app-button';
    let variantClassName = '';
    let colorClassName = '';

    if (this.variant !== undefined) {
      variantClassName = `${baseName}-${this.variant}`;

      if (this.color !== undefined) {
        colorClassName = `${baseName}-${this.variant}-${this.color}`;
      }
    }

    let sizeClassName = '';

    if (this.size !== undefined) {
      sizeClassName = `${baseName}-${this.size}`;
    }

    let wFullClassName = '';

    if (this.wFull) {
      wFullClassName = `${baseName}-w-full`;
    }

    let hFullClassName = '';

    if (this.hFull) {
      hFullClassName = `${baseName}-h-full`;
    }

    this.className = `${baseName} ${variantClassName} ${colorClassName} ${sizeClassName} ${wFullClassName} ${hFullClassName}`;

    this.gapStyle = `${this.spacingInPx}px`;
  }
}
