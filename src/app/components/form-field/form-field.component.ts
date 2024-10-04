import { Component, inject, Input, OnInit } from '@angular/core';
import { FormFieldService } from './form-field.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  providers: [FormFieldService],
})
export class FormFieldComponent implements OnInit {
  @Input({ required: true })
  control: AbstractControl | null = null;

  private _formFieldService = inject(FormFieldService);

  ngOnInit(): void {
    this._formFieldService.control = this.control;
  }
}
