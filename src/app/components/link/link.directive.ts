import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ButtonDirective } from '../button';

@Directive({
  selector: '[appLink]',
  standalone: true,
})
export class LinkDirective extends ButtonDirective implements OnInit {
  constructor(
    public override el: ElementRef,
    public override renderer: Renderer2
  ) {
    super(el, renderer);
  }
}
