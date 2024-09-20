import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header';
import { HomeHeroComponent } from './home-hero/home-hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HomeHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {
    class: 'h-full',
  },
})
export class HomeComponent {}
