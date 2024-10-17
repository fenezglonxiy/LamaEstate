import { Component, Input, OnInit } from '@angular/core';
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
    formItemService: FormItemService
  ) {
    this.id = formItemService.formItemId;
    this.describedby = formItemService.formDescriptionId;
  }

  ngOnInit(): void {
    this.control = this._formFieldService.control as NonNullable<FormControl>;
  }
}
