import { Component, Input, OnInit, Optional } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { FormFieldService, FormItemService } from '../form';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  @Input()
  placeholder = '';

  @Input()
  type: 'text' | 'number' | undefined = 'text';

  @Input()
  hFull = false;

  control!: FormControl;

  id = '';

  describedby = '';

  constructor(
    @Optional() private _formItemService?: FormItemService,
    @Optional() private _formFieldService?: FormFieldService
  ) {
    if (this._formItemService) {
      this.id = this._formItemService.formItemId;
      this.describedby = this._formItemService.formDescriptionId;
    }
  }

  ngOnInit(): void {
    if (this._formFieldService) {
      this.control = this._formFieldService.control as NonNullable<FormControl>;
    }
  }
}
