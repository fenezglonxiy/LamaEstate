import { Component, HostBinding } from '@angular/core';
import { TypographyComponent } from '../../typography/typography.component';
import { FormItemService } from '../form-item/form-item.service';

@Component({
  selector: 'app-form-description',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './form-description.component.html',
  styleUrl: './form-description.component.scss',
})
export class FormDescriptionComponent {
  @HostBinding('id')
  id: string;

  constructor(formItemService: FormItemService) {
    this.id = formItemService.formDescriptionId;
  }
}
