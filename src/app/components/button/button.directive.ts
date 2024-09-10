import {
  computed,
  Directive,
  ElementRef,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ButtonProps } from './button.component';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  variant = input<ButtonProps['variant']>();
  color = input<ButtonProps['color']>();
  size = input<ButtonProps['size']>();

  constructor(public el: ElementRef, public renderer: Renderer2) {}

  ngOnInit(): void {
    const base = `app-button-${this.variant()}`;
    this.renderer.addClass(this.el.nativeElement, 'app-button');

    if (this.variant() !== undefined) {
      this.renderer.addClass(this.el.nativeElement, base);
    }

    if (this.color() !== undefined) {
      this.renderer.addClass(this.el.nativeElement, `${base}-${this.color()}`);
    }

    if (this.size() !== undefined) {
      this.renderer.addClass(
        this.el.nativeElement,
        `app-button-${this.size()}`
      );
    }
  }
}
