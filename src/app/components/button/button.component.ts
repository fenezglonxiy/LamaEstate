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
  variant: 'contained' | 'outlined' | 'ghost' | 'text' | undefined;

  @Input()
  color: 'primary' | 'secondary' = 'primary';

  @Input()
  size: 'sm' | 'base' | 'icon' | 'icon-md' | 'icon-lg' | 'auto' | undefined;

  @Input()
  wFull = false;

  @Input()
  hFull = false;

  @Input()
  type: 'submit' | 'button' = 'button';

  @Input()
  disabled = false;

  className = '';

  ngOnInit(): void {
    let variantClassName = '';
    let colorClassName = '';

    if (this.variant !== undefined) {
      variantClassName = this.variant;

      if (this.color !== undefined) {
        colorClassName = `${this.variant}-${this.color}`;
      }
    }

    let sizeClassName = '';

    if (this.size !== undefined) {
      sizeClassName = this.size;
    }

    let wFullClassName = '';

    if (this.wFull) {
      wFullClassName = 'w-full';
    }

    let hFullClassName = '';

    if (this.hFull) {
      hFullClassName = 'h-full';
    }

    this.className = `app-button ${variantClassName} ${colorClassName} ${sizeClassName} ${wFullClassName} ${hFullClassName}`;
  }
}
