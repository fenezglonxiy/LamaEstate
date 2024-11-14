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
export class TabComponent implements OnInit {
  @Input({ required: true })
  for: string = '';

  $active = signal(false);

  @HostBinding('role')
  private _role = 'tab';

  @HostBinding('attr.aria-selected')
  private _ariaSelected = this.$active();

  @HostBinding('attr.aria-controls')
  private _ariaControls = '';

  tabClicked = new EventEmitter<string>();

  ngOnInit(): void {
    this._ariaControls = this.for;
  }

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
