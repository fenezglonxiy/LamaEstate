import { Component, Input } from '@angular/core';
import { LinkComponent } from '../../link/link.component';

@Component({
  selector: 'app-pagination-link',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './pagination-link.component.html',
  styleUrl: './pagination-link.component.scss',
})
export class PaginationLinkComponent {
  @Input({ required: true })
  href = '';
}
