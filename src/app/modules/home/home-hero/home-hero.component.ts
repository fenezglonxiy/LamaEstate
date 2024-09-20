import { Component } from '@angular/core';
import { TypographyComponent } from '../../../components/typography/typography.component';
import { EstateSearchBarComponent } from './estate-search-bar/estate-search-bar.component';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../../../components/tabs/tabs.component';
import { TabComponent } from '../../../components/tabs/tab/tab.component';
import { TabContentComponent } from '../../../components/tabs/tab-content/tab-content.component';
import { TabContainerComponent } from '../../../components/tabs/tab-container/tab-container.component';
import { TabContentContainerComponent } from '../../../components/tabs/tab-content-container/tab-content-container.component';

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
