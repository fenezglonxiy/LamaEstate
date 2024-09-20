import { Component } from '@angular/core';
import { TypographyComponent } from '../../../components/typography/typography.component';
import { EstateSearchBarComponent } from './estate-search-bar/estate-search-bar.component';
import { CommonModule } from '@angular/common';
import {
  TabComponent,
  TabContainerComponent,
  TabContentComponent,
  TabContentContainerComponent,
  TabsComponent,
} from '../../../components/tabs';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [
    TypographyComponent,
    EstateSearchBarComponent,
    CommonModule,
    TabsComponent,
    TabComponent,
    TabContentComponent,
    TabContainerComponent,
    TabContentContainerComponent,
  ],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
})
export class HomeHeroComponent {
  achievements = [
    { statistics: '16+', statisticsOf: 'Years of Experience' },
    { statistics: '200', statisticsOf: 'Award Gained' },
    { statistics: '1200+', statisticsOf: 'Property Ready' },
  ];
}
