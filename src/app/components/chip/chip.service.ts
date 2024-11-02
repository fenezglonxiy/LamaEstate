import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ChipService {
  readonly id = uuid();
  readonly chipId = `${this.id}-chip`;
  readonly chipLabelId = `${this.id}-chip-label`;
  readonly chipDescriptionId = `${this.id}-chip-description`;
}
