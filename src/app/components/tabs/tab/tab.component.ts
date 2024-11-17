import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  @HostBinding('attr.aria-controls')
  @Input({ required: true })
  for: string = '';

  $active = signal(false);

  @HostBinding('role')
  private _role = 'tab';

  @HostBinding('attr.aria-selected')
  private _ariaSelected = this.$active();

  tabClicked = new EventEmitter<string>();

  onButtonClick() {
    this.tabClicked.emit(this.for);
  }

  activate() {
    this.$active.set(true);
    this._ariaSelected = true;
  }

  deactivate() {
    this.$active.set(false);
    this._ariaSelected = false;
  }
}
