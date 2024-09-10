import { Component, input, output } from '@angular/core';
import { ButtonDirective } from './button.directive';

export type ButtonProps = {
  variant?: 'contained' | 'text';
  color?: 'primary';
  size?: 'base' | 'icon' | 'auto';
};

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonDirective],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  variant = input<ButtonProps['variant']>();
  color = input<ButtonProps['color']>();
  size = input<ButtonProps['size']>();
  clicked = output();
}
