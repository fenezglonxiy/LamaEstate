import { Component, EventEmitter, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  @Input({ required: true })
  for: string = '';

  private _active = false;
  tabClicked = new EventEmitter<string>();

  onButtonClick() {
    this.tabClicked.emit(this.for);
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}
