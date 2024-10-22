import { Component, HostBinding, Input, OnInit } from '@angular/core';
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

  className = '';

  ngOnInit(): void {
    this.className = `app-typography-${this.variant}`;
  }
}
