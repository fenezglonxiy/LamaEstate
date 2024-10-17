import {
  Component,
  computed,
  forwardRef,
  HostBinding,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectService } from '../select.service';
import { PopoverService } from '../../popover';

@Component({
  selector: 'app-select-control',
  standalone: true,
  imports: [],
  templateUrl: './select-control.component.html',
  styleUrl: './select-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlComponent),
      multi: true,
    },
  ],
})
export class SelectControlComponent implements ControlValueAccessor {
  private _popoverService = inject(PopoverService);

  @HostBinding('role')
  private _role = 'list';

  private _$value = signal<any>(undefined);

  private _onChange: ((_: unknown) => unknown) | undefined = undefined;

  private _onTouched: (() => unknown) | undefined = undefined;

  writeValue(newValue: any): void {
    this._$value.set(newValue);
  }

  registerOnChange(fn: (_: unknown) => unknown): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => unknown): void {
    this._onTouched = fn;
  }

  constructor(selectService: SelectService) {
    selectService.$value = computed(() => this._$value());

    selectService.onSelect = (value: any) => {
      if (this._onChange) {
        this._$value.set(value);
        this._onChange(value);
        this._popoverService.toggleContent();
      }
    };
  }

  @HostListener('blur')
  private _handleBlur() {
    if (this._onTouched) {
      this._onTouched();
    }
  }
}
