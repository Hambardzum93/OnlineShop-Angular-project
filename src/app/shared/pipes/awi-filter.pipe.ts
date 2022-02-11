import { Pipe, PipeTransform } from '@angular/core';
import {Time} from "../interfaces";

@Pipe({
  name: 'awiFilter'
})
export class AwiFilterPipe implements PipeTransform {

  transform(awi: Time[], inputText: string): Time[] {
    if (inputText === '') return null;
    return awi.filter(el => el['model'].toLocaleLowerCase().includes(inputText.toLocaleLowerCase()));
  }

}
