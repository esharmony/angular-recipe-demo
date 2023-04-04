import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'splitOnPeriod' })
export class SplitOnPeriodPipe implements PipeTransform {
  constructor() {}
  transform(value: string) {
    return value
      .split('.')
      .map((str) => {
        return (str += ' \n');
      })
      .join('');
  }
}
