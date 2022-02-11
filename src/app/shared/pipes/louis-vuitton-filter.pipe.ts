import { Pipe, PipeTransform } from '@angular/core';
import {Jewellery} from "../interfaces";

@Pipe({
  name: 'louisVuittonFilter'
})
export class LouisVuittonFilterPipe implements PipeTransform {

  transform(louisVuitton: Jewellery[], inputText: string): Jewellery[] {
    if (inputText === '') return null;
    return louisVuitton.filter(el => el['model'].toLocaleLowerCase().includes(inputText.toLocaleLowerCase()));
  }

}
