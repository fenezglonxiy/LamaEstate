import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  HostBinding,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-select-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-item.component.html',
  styleUrl: './select-item.component.scss',
})
export class SelectItemComponent implements OnInit {
  private _selectService = inject(SelectService);

  @HostBinding('role')
  private _role = 'listitem';

  @Input({ required: true })
  value = '';

  @HostBinding('tabindex')
  private _tabindex = -1;

  $selected = computed(() => this.value === this._selectService.$value?.());

  constructor() {
    effect(() => {
      this._tabindex = this.$selected() ? 0 : -1;
    });
  }

  handleSelect: ((value: any) => void) | undefined;

  ngOnInit(): void {
    this.handleSelect = this._selectService.onSelect;
  }
}
