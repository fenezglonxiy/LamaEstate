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
  variant:
    | 'body'
    | 'label'
    | 'labelBold'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h4Bold' = 'body';

  @Input()
  ellipsisLineClamp = 0;

  @HostBinding('style.display')
  private _display = 'block';

  private _vcr = inject(ViewContainerRef);

  className = '';

  ngOnInit(): void {
    const variantClassName = `app-typography-${this.variant}`;

    if (this.displayAs === 'span') {
      this._display = 'inline';
    }

    let textOverflowClassName = '';

    if (this.ellipsisLineClamp > 0) {
      textOverflowClassName = 'text-overflow-line';
      this._vcr.element.nativeElement.style.setProperty('--line-clamp', 2);
    }

    this.className = `${variantClassName} ${textOverflowClassName}`;
  }
}
