import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  computed,
  effect,
  HostBinding,
  inject,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-select-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-item.component.html',
  styleUrl: './select-item.component.scss',
})
export class SelectItemComponent implements OnInit, AfterContentInit {
  @HostBinding('role')
  private _role = 'listitem';

  @Input({ required: true })
  value = '';

  @HostBinding('tabindex')
  private _tabindex = -1;

  $selected = computed(() => this.value === this._selectService.$value?.());

  constructor(
    private _vcr: ViewContainerRef,
    private _selectService: SelectService
  ) {
    effect(() => {
      this._tabindex = this.$selected() ? 0 : -1;
    });
  }

  handleSelect: ((value: string) => void) | undefined;

  ngOnInit(): void {
    this.handleSelect = this._selectService.onSelect;
  }

  ngAfterContentInit(): void {
    this._selectService.registerItem(
      this.value,
      this._vcr.element.nativeElement.innerText
    );
  }
}
