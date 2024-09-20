import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  variant = input<'contained' | 'text'>();
  color = input<'primary'>();
  size = input<'base' | 'icon' | 'icon-md' | 'auto'>();
  wFull = input(false);
  className = computed(() => {
    const base = `app-button-${this.variant()}`;
    let variantClassName = '';

    if (this.variant() !== undefined) {
      variantClassName = base;
    }

    let colorClassName = '';

    if (this.color() !== undefined) {
      colorClassName = `${base}-${this.color()}`;
    }

    let sizeClassName = '';

    if (this.size() !== undefined) {
      sizeClassName = `app-button-${this.size()}`;
    }

    let wFullClassName = '';

    if (this.wFull()) {
      wFullClassName = 'app-button-w-full';
    }

    return `app-button ${variantClassName} ${colorClassName} ${sizeClassName} ${wFullClassName}`;
  });
  clicked = output();
}
