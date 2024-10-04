import { ValidatorFn } from '@angular/forms';

interface Validator {
  validate(...arg: any[]): ValidatorFn;
}

export default Validator;
