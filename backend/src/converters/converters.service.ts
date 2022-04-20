import { Injectable } from '@nestjs/common';

@Injectable()
export class ConvertersService {
  numberToRoman(n: number): string {
    if (n % 1 !== 0) {
      // TODO : i18n
      throw new Error('Input must be integer');
    }

    if (n < 0 || n > 100) {
      // TODO : i18n
      throw new Error('Input integer limited to 0 through 100');
    }

    // Arbitrary result for zero
    if (n === 0) {
      return '??';
    }

    const lookup = {
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let roman = '';
    for (const i in lookup) {
      while (n >= lookup[i]) {
        roman += i;
        n -= lookup[i];
      }
    }
    return roman;
  }
}
