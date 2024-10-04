import { Component } from '@angular/core';
import { TypographyComponent } from '../../typography/typography.component';
import { FormItemService } from '../form-item/form-item.service';

@Component({
  selector: 'app-form-label',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './form-label.component.html',
  styleUrl: './form-label.component.scss',
})
export class FormLabelComponent {
  formItemId: string;

  constructor(formItemService: FormItemService) {
    this.formItemId = formItemService.formItemId;
  }
}
