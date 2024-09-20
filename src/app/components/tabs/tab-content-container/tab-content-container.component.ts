import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { TabContentComponent } from '../tab-content/tab-content.component';

@Component({
  selector: 'app-tab-content-container',
  standalone: true,
  imports: [],
  templateUrl: './tab-content-container.component.html',
  styleUrl: './tab-content-container.component.scss',
})
export class TabContentContainerComponent implements AfterContentInit {
  @ContentChildren(TabContentComponent)
  tabContentComps!: QueryList<TabContentComponent>;

  readonly tabContentCompMap: Record<string, TabContentComponent> = {};

  ngAfterContentInit(): void {
    this.tabContentComps.forEach((comp) => {
      const compId = comp.id;
      this.tabContentCompMap[compId] = comp;
    });
  }

  activateTabContent(tabContentId: string) {
    if (!(tabContentId in this.tabContentCompMap)) {
      throw new Error(`The TabContentComponent#${tabContentId} does not exist`);
    }

    this.tabContentCompMap[tabContentId].activate();
  }

  deactivateTabContent(tabContentId: string) {
    if (!(tabContentId in this.tabContentCompMap)) {
      throw new Error(`The TabContentComponent#${tabContentId} does not exist`);
    }

    this.tabContentCompMap[tabContentId].deactivate();
  }
}
