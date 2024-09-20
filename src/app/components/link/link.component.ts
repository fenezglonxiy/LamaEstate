import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss', '../button/button.component.scss'],
})
export class LinkComponent extends ButtonComponent {
  href = input.required<string | any[]>();
  activeClassName = input<string | string[]>();
  hoverAnimation = input<'scale' | 'none'>('none');
}
