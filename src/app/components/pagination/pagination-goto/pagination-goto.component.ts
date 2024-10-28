import { Component } from '@angular/core';
import { InputComponent } from '../../input/input.component';

@Component({
  selector: 'app-pagination-goto',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './pagination-goto.component.html',
  styleUrl: './pagination-goto.component.scss',
})
export class PaginationGotoComponent {}
