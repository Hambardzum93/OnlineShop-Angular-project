import { Pipe, PipeTransform } from '@angular/core';
import {Time} from "../interfaces";

@Pipe({
  name: 'casioFilter'
})
export class CasioFilterPipe implements PipeTransform {

  transform(casio: Time[], inputText: string): Time[] {
    if (inputText === '') return null;
    return casio.filter(el => el['model'].toLocaleLowerCase().includes(inputText.toLocaleLowerCase()));
  }

}
