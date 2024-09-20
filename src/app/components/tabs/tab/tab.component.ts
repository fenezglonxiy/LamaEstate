import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, signal } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  @Input({ required: true })
  for: string = '';

  $active = signal(false);
  tabClicked = new EventEmitter<string>();

  onButtonClick() {
    this.tabClicked.emit(this.for);
  }

  activate() {
    this.$active.set(true);
  }

  deactivate() {
    this.$active.set(false);
  }
}
