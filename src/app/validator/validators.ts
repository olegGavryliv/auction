import {FormControl} from '@angular/forms';


export function positiveNumberValidator(control: FormControl): any {
    if (!control.value) { return null; }
    const price = parseInt(control.value, 10);
    return price === null || typeof price === 'number' && price > 0 ? null : {positivenumber: true};
  }

