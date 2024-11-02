import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class FormFieldService {
  private _control: AbstractControl | undefined;

  public set control(value: AbstractControl) {
    if (this._control) {
      return;
    }

    this._control = value;
  }

  public get control() {
    return this._control as NonNullable<AbstractControl>;
  }
}
