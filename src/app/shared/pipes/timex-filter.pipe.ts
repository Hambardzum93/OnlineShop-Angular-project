import { Pipe, PipeTransform } from '@angular/core';
import {Time} from '../interfaces';

@Pipe({
  name: 'timexFilter'
})
export class TimexFilterPipe implements PipeTransform {

  transform(timex: Time[], inputText: string): Time[] {
    if (inputText === '') return null;
    return timex.filter(el => el['model'].toLocaleLowerCase().includes(inputText.toLocaleLowerCase()));
  }

}
