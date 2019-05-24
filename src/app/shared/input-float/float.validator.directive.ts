import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { floatValidator } from './float.validator';

@Directive({
  selector: '[appFloatValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FloatValidatorDirective,
      multi: true
    }
  ]
})
export class FloatValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } {
    return floatValidator()(control);
  }
}
