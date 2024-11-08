import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnInit,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
})
export class TypographyComponent implements OnInit {
  @Input()
  displayAs: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'p' =
    'p';

  @HostBinding('for') @Input() for = '';

  @Input()
  variant: 'body' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' = 'body';

  @Input()
  fontWeight:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black' = 'normal';

  @Input()
  ellipsisLineClamp = 0;

  @HostBinding('style.display')
  private _display = 'block';

  private _elementRef = inject(ElementRef);

  private _renderer = inject(Renderer2);

  className = '';

  ngOnInit(): void {
    const baseClassName = 'app-typography';
    const variantClassName = `${baseClassName}-${this.variant}`;

    if (this.displayAs === 'span' || this.displayAs === 'label') {
      this._display = 'inline';
    }

    let textOverflowClassName = '';

    if (this.ellipsisLineClamp > 0) {
      textOverflowClassName = `${baseClassName}-overflow-line`;
      this._renderer.setStyle(
        this._elementRef.nativeElement,
        '--line-clamp',
        `${this.ellipsisLineClamp}`,
        RendererStyleFlags2.DashCase
      );
    }

    const fontWeightClassName = `${baseClassName}-${this.fontWeight}`;

    this.className = `${variantClassName} ${textOverflowClassName} ${fontWeightClassName}`;
  }
}
