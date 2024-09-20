import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
})
export class TypographyComponent {
  displayAs = input<'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'>('p');
  variant = input<'body' | 'h1' | 'h2' | 'h3' | 'h4'>('body');
  className = computed(() => `app-typography-${this.variant()}`);
}
