import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss',
})
export class OverlayComponent {
  @HostListener('click')
  handleClick: (() => void) | undefined = undefined;
}
