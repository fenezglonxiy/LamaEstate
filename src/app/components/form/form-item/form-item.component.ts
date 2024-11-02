import { Component } from '@angular/core';
import { FormItemService } from './form-item.service';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.scss',
  providers: [FormItemService],
})
export class FormItemComponent {}
