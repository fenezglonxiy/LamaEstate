import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormFieldService } from '../form-field/form-field.service';
import { FormItemService } from '../form-field/form-item/form-item.service';
import { NgClass } from '@angular/common';

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
  type: 'text' | 'number' = 'text';

  @Input()
  wFull = false;

  @Input()
  hFull = false;

  control!: FormControl;

  id = '';

  describedby = '';

  constructor(
    private _formFieldService: FormFieldService,
    private _formItemService: FormItemService
  ) {}

  ngOnInit(): void {
    this.control = this._formFieldService.control as NonNullable<FormControl>;
    this.id = this._formItemService.formItemId;
    this.describedby = this._formItemService.formDescriptionId;
  }
}
