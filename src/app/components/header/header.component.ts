import { Component } from '@angular/core';
import { LinkComponent } from '../link';
import { LogoComponent } from '../logo';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LinkComponent, LogoComponent, HamburgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navListLeft = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Agents', href: '/agents' },
  ];
}
