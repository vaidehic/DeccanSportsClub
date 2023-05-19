import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyForAmount'
})
export class CurrencyForAmountPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let result = value  + " Rs";
    return result;
  }

}
