import { computed, Injectable, Signal } from '@angular/core';

@Injectable()
export class SelectService {
  private _itemValueLabelMapping: Record<string, string> = {};

  private _longestLabel: string | undefined;

  $value: Signal<string> | undefined;

  $label = computed(() =>
    this.$value ? this._itemValueLabelMapping[this.$value()] : ''
  );

  maxTriggerWidth = 0;

  public get longestLabel() {
    if (this._longestLabel) {
      return this._longestLabel;
    }

    let ans = undefined;

    for (const [value, label] of Object.entries(this._itemValueLabelMapping)) {
      if (!ans || ans.length < label.length) {
        ans = value;
      }
    }

    return ans;
  }

  onSelect: ((value: string) => void) | undefined;

  registerItem(value: string, label: string) {
    this._itemValueLabelMapping[value] = label;
  }
}
