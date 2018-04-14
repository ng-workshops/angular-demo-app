import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { getFloat, cutToDecimal } from '../utils/utils';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { E2EHostComponent } from '../e2e-host/e2e-host.component';

@Component({
  selector: 'app-input-float',
  templateUrl: './input-float.component.html',
  styleUrls: ['./input-float.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => InputFloatComponent) }
  ]
})
export class InputFloatComponent extends E2EHostComponent implements OnInit, ControlValueAccessor {
  readonly attr_e2e = 'input-float';

  @Input() numberOfDigits: number;

  @Input() round: boolean;

  @Input() placeholder: string;

  @Input() name: string;

  input = '';

  _value: any;
  _onChangeCallback: (value: any) => void;
  _onTouchedCallback: () => void;

  ngOnInit() {
    // init default values
    this.numberOfDigits = this.numberOfDigits || 2;
    this.round = this.round || true;
  }

  parseToFloat(value: string) {
    // set value which is delegated to form model
    this.value = getFloat(value);
  }

  /**
   * Implemented as part of ControlValueAccessor.
   * Gets the value from the form model and sets the input
   *
   * @param {*} value
   *
   * @memberOf UlInputFloatComponent
   */
  writeValue(value: any) {
    let viewValue = value;

    // check if value is number and try to format it
    if (!isNaN(viewValue) && viewValue !== null) {
      if (this.round) {
        viewValue = parseFloat(viewValue).toFixed(this.numberOfDigits);
      } else {
        viewValue = cutToDecimal(viewValue, this.numberOfDigits);
      }

      viewValue = viewValue.replace('.', ',');
    }

    // set internal input field value
    this.input = viewValue || '';
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  /**
   * View to Model changes
   * Can be overwritten in derived classes
   */
  set value(v: any) {
    // update value when new value is different
    // OR when both values are null (to trigger the _onChangeCallback() for validation)
    if (v !== this._value || v === null && this._value === null) {
      this._value = v;

      if (this._onChangeCallback) {
        this._onChangeCallback(this._value);
      }
    }
  }

  /**
   * Model to View changes
   * Can be overwritten in derived classes
   */
  get value() {
    return this._value;
  }
}
