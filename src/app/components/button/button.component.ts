import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input()
  variant: 'contained' | 'outlined' | 'text' | undefined;

  @Input()
  color: 'primary' | undefined;

  @Input()
  size: 'base' | 'icon' | 'icon-md' | 'auto' | undefined;

  @Input()
  wFull = false;

  @Input()
  hFull = false;

  @Input()
  type: 'submit' | 'button' = 'button';

  className = '';

  ngOnInit(): void {
    const base = `app-button-${this.variant}`;
    let variantClassName = '';

    if (this.variant !== undefined) {
      variantClassName = base;
    }

    let colorClassName = '';

    if (this.color !== undefined) {
      colorClassName = `${base}-${this.color}`;
    }

    let sizeClassName = '';

    if (this.size !== undefined) {
      sizeClassName = `app-button-${this.size}`;
    }

    let wFullClassName = '';

    if (this.wFull) {
      wFullClassName = 'app-button-w-full';
    }

    let hFullClassName = '';

    if (this.hFull) {
      hFullClassName = 'app-button-h-full';
    }

    this.className = `app-button ${variantClassName} ${colorClassName} ${sizeClassName} ${wFullClassName} ${hFullClassName}`;
  }
}
