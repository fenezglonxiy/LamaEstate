import {
  AfterContentInit,
  Component,
  ContentChild,
  effect,
  inject,
  Injector,
  Input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabContentContainerComponent } from './tab-content-container/tab-content-container.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements OnChanges, AfterContentInit {
  private _prevTab = '';
  private _$tab = signal('');
  private _injector = inject(Injector);

  @ContentChild(TabContainerComponent, { static: true })
  private _tabContainer!: TabContainerComponent;

  @ContentChild(TabContentContainerComponent, { static: true })
  private _tabContentContainer!: TabContentContainerComponent;

  @Input() tab = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tab'].previousValue !== changes['tab'].currentValue) {
      this._$tab.set(changes['tab'].currentValue);
    }
  }

  ngAfterContentInit(): void {
    this.checkIfTabAndTabContentAreMatched();
    effect(
      () => {
        const nextTab = this._$tab();

        if (nextTab == this._prevTab) {
          return;
        }

        if (this._prevTab !== '') {
          this._tabContainer.deactivateTab(this._prevTab);
          this._tabContentContainer.deactivateTabContent(this._prevTab);
        }

        this._tabContainer.activateTab(nextTab);
        this._tabContentContainer.activateTabContent(nextTab);
        this._prevTab = nextTab;
      },
      { allowSignalWrites: true, injector: this._injector }
    );
    this._tabContainer.tabChanged.pipe().subscribe(this.onTabChanged);

    if (this._$tab() === '') {
      this._$tab.set(this._tabContainer.tabComps.get(0)?.for as string);
    }
  }

  onTabChanged = (nextTab: string): void => {
    this._$tab.set(nextTab);
  };

  checkIfTabAndTabContentAreMatched() {
    const tabCompMap = this._tabContainer.tabCompMap;
    const tabContentCompMap = this._tabContentContainer.tabContentCompMap;

    for (let [tabCompFor, _] of Object.entries(tabCompMap)) {
      if (!(tabCompFor in tabContentCompMap)) {
        throw new Error(
          `The TabComponent 'for=${tabCompFor}' does not have a matching TabContentComponent`
        );
      }
    }

    for (let [tabContentId, _] of Object.entries(tabContentCompMap)) {
      if (!(tabContentId in tabCompMap)) {
        throw new Error(
          `The TabContentComponent#${tabContentId} does not have a matching TabComponent`
        );
      }
    }
  }
}
