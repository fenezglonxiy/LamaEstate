import { Component } from '@angular/core';
import { ButtonComponent } from '../../button';
import { LinkComponent } from '../../link';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [ButtonComponent, LinkComponent],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss',
})
export class HamburgerMenuComponent {
  navList = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Agents', href: '/agents' },
    { label: 'Sign in', href: '/signin' },
    { label: 'Sign up', href: 'signup' },
  ];
  expanded = false;

  onButtonClick() {
    this.expanded = !this.expanded;

    if (this.expanded) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
