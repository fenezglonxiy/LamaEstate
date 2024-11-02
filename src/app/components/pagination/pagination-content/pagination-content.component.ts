import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  inject,
  QueryList,
} from '@angular/core';
import { PaginationItemComponent } from '../pagination-item/pagination-item.component';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-pagination-content',
  standalone: true,
  imports: [],
  templateUrl: './pagination-content.component.html',
  styleUrl: './pagination-content.component.scss',
})
export class PaginationContentComponent implements AfterContentInit {
  @ContentChildren(PaginationItemComponent)
  private _items: QueryList<PaginationItemComponent> | null = null;

  @HostBinding('role')
  private _role = 'list';

  private _paginationService = inject(PaginationService);

  ngAfterContentInit(): void {
    if (this._items === null) {
      return;
    }

    this._items.map((item) => {
      if (item.paginationLink) {
        this._paginationService.registerPage(item.paginationLink.href);
      }
    });
  }
}
