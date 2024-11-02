import { Component, inject } from '@angular/core';
import { PaginationService } from '../pagination.service';
import { ButtonComponent } from '../../button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination-previous',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pagination-previous.component.html',
  styleUrl: './pagination-previous.component.scss',
})
export class PaginationPreviousComponent {
  private _paginationService = inject(PaginationService);

  private _router = inject(Router);

  $canGotoPrevious = this._paginationService.$canGotoPrevious;

  handleClick = () => this._paginationService.gotoPreviousPage(this._router);
}
