import { Component } from '@angular/core';
import { LogoComponent } from '../../../components/logo/';
import { LinkComponent } from '../../../components/link';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [LogoComponent, LinkComponent],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent {
  navListLeft = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Agents', href: '/agents' },
  ];
}
