import { Component, inject } from '@angular/core';
import { PaginationService } from '../pagination.service';
import { ButtonComponent } from '../../button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination-next',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pagination-next.component.html',
  styleUrl: './pagination-next.component.scss',
})
export class PaginationNextComponent {
  private _paginationService = inject(PaginationService);

  private _router = inject(Router);

  $canGotoNext = this._paginationService.$canGotoNext;

  handleClick = () => this._paginationService.gotoNextPage(this._router);
}
