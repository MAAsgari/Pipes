import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(value: any, exponent?: string): any {
    if (typeof exponent != 'undefined') {
      let exp = parseFloat(exponent);
      return Math.pow(value, isNaN(exp) ? 1 : exp);
    } else {
      return value * 2;
    }
  }
}
