import { computed, Injectable, signal } from '@angular/core';
import { NavigationBehaviorOptions, Router, UrlTree } from '@angular/router';

@Injectable()
export class PaginationService {
  $pageNo = computed(() => this._$pageNo());

  $canGotoPrevious = computed(() => this.$pageNo() > 0);

  $canGotoNext = computed(() => this.$pageNo() < this._pageHref.length);

  navigateByUrl:
    | ((
        url: string | UrlTree,
        extras?: NavigationBehaviorOptions
      ) => Promise<boolean>)
    | undefined;

  private _$pageNo = signal(0);

  private _pageHref: Array<string> = [];

  registerPage(href: string) {
    this._pageHref.push(href);
  }

  gotoPreviousPage(router: Router) {
    if (this.$canGotoPrevious()) {
      router.navigateByUrl(this._pageHref[this.$pageNo() - 1]);
    }
  }

  gotoNextPage(router: Router) {
    if (this.$canGotoNext()) {
      router.navigateByUrl(this._pageHref[this.$pageNo() + 1]);
    }
  }
}
