import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  standalone: true,
  imports: [],
  templateUrl: './tab-container.component.html',
  styleUrl: './tab-container.component.scss',
})
export class TabContainerComponent implements AfterContentInit {
  tabChanged = new EventEmitter<string>();

  @ContentChildren(TabComponent)
  tabComps!: QueryList<TabComponent>;

  readonly tabCompMap: Record<string, TabComponent> = {};

  ngAfterContentInit(): void {
    this.tabComps.forEach((comp) => {
      comp.tabClicked.pipe().subscribe(this.onTabClick);
      this.tabCompMap[comp.for] = comp;
    });
  }

  onTabClick = (tabFor: string): void => {
    this.tabChanged.emit(tabFor);
  };

  activateTab(tabFor: string) {
    if (!(tabFor in this.tabCompMap)) {
      throw new Error(`The TabComponent 'for=${tabFor}' does not exist`);
    }

    this.tabCompMap[tabFor].activate();
  }

  deactivateTab(tabFor: string) {
    if (!(tabFor in this.tabCompMap)) {
      throw new Error(`The TabComponent 'for=${tabFor}' does not exist`);
    }

    this.tabCompMap[tabFor].deactivate();
  }
}
