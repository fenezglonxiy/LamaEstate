import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-home-hero-estate-search-bar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './estate-search-bar.component.html',
  styleUrl: './estate-search-bar.component.scss',
})
export class EstateSearchBarComponent {}
