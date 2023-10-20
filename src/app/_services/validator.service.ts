import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidatorService {

  constructor() { }

  public whiteSpaceValidator(control: FormControl): { [key: string]: boolean } | null {
    if (control.value.replace(/\s/g, '').length === 0) {
      return { 'whitespaceError': true };
    }
    return null;
  }
}
