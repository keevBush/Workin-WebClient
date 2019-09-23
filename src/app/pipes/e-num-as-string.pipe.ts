import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eNumAsString'
})
export class ENumAsStringPipe implements PipeTransform {

  transform(value: any, enumType: any): any {
    return enumType[value].split(/(?=[A-Z])/).join().replace(',', ' ');
  }

}
