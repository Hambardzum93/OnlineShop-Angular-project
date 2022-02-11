import { Pipe, PipeTransform } from '@angular/core';
import {Time} from "../interfaces";

@Pipe({
  name: 'hublotFilter'
})
export class HublotFilterPipe implements PipeTransform {

  transform(hublot: Time[], inputText: string): Time[] {
    if (inputText === '') return null;
    return hublot.filter(el => el['model'].toLocaleLowerCase().includes(inputText.toLocaleLowerCase()));
  }

}
