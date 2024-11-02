import { Component, ContentChild, HostBinding } from '@angular/core';
import { PaginationLinkComponent } from '../pagination-link/pagination-link.component';

@Component({
  selector: 'app-pagination-item',
  standalone: true,
  imports: [],
  templateUrl: './pagination-item.component.html',
  styleUrl: './pagination-item.component.scss',
})
export class PaginationItemComponent {
  @HostBinding('role')
  private _role = 'listitem';

  @ContentChild(PaginationLinkComponent)
  paginationLink: PaginationLinkComponent | null = null;
}
