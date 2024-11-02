import {
  Component,
  HostBinding,
  inject,
  Input,
  OnInit,
  ViewContainerRef,
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

  private _vcr = inject(ViewContainerRef);

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
      this._vcr.element.nativeElement.style.setProperty(
        '--line-clamp',
        this.ellipsisLineClamp
      );
    }

    const fontWeightClassName = `${baseClassName}-${this.fontWeight}`;

    this.className = `${variantClassName} ${textOverflowClassName} ${fontWeightClassName}`;
  }
}
