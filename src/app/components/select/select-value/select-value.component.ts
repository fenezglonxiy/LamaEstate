import { Component, inject, Input, OnInit, Signal } from '@angular/core';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-select-value',
  standalone: true,
  imports: [],
  templateUrl: './select-value.component.html',
  styleUrl: './select-value.component.scss',
})
export class SelectValueComponent implements OnInit {
  private _selectService = inject(SelectService);

  $value: Signal<any> | undefined;

  @Input()
  placeholder = '';

  ngOnInit(): void {
    this.$value = this._selectService.$value;
  }
}
