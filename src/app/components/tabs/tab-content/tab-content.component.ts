import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.scss',
})
export class TabContentComponent {
  @Input({ required: true })
  id: string = '';

  $active = signal(false);

  activate() {
    this.$active.set(true);
  }

  deactivate() {
    this.$active.set(false);
  }
}
