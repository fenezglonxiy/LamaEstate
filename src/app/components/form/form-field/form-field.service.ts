import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class FormFieldService {
  control: AbstractControl | null = null;
}
