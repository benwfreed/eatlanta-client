import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linebreak'
})
export class LinebreakPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const newVal = value.replace(/\r\n/g, '<br><br>');
    return newVal;
  }

}
