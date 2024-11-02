import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FormItemService {
  readonly id = uuid();
  readonly formItemId = `${this.id}-form-item`;
  readonly formDescriptionId = `${this.id}-form-item-description`;
}
