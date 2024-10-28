import { Component } from '@angular/core';
import { InputComponent } from '../../input/input.component';
import { FormControlComponent, FormFieldComponent } from '../../form';
import { FormControl } from '@angular/forms';
import { TypographyComponent } from '../../typography';

@Component({
  selector: 'app-pagination-goto',
  standalone: true,
  imports: [
    InputComponent,
    FormFieldComponent,
    FormControlComponent,
    TypographyComponent,
  ],
  templateUrl: './pagination-goto.component.html',
  styleUrl: './pagination-goto.component.scss',
})
export class PaginationGotoComponent {
  destFormControl = new FormControl(0);
}
