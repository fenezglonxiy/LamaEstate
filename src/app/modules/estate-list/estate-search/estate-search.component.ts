import { Component } from '@angular/core';
import { TypographyComponent } from '../../../components/typography';
import { TextFieldComponent } from '../../../components/text-field/text-field.component';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-estate-list-estate-search',
  standalone: true,
  imports: [TypographyComponent, TextFieldComponent, ButtonComponent],
  templateUrl: './estate-search.component.html',
  styleUrl: './estate-search.component.scss',
})
export class EstateSearchComponent {}
