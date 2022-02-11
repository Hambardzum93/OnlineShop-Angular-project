import { Pipe, PipeTransform } from '@angular/core';
import {Jewellery, Time} from "../interfaces";

@Pipe({
  name: 'svarovskiFilter'
})
export class SvarovskiFilterPipe implements PipeTransform {

  transform(svarovski: Jewellery[], inputText: string): Jewellery[] {
    if (inputText === '') return null;
    return svarovski.filter(el => el['model'].toLocaleLowerCase().includes(inputText.toLocaleLowerCase()));
  }

}
