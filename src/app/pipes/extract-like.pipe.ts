import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractLike'
})
export class ExtractLikePipe implements PipeTransform {

  transform(value: any, args?: boolean): any {
    return value.filter(l => l.etat === true).length;
  }

}
