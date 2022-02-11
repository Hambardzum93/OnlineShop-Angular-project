import { Pipe, PipeTransform } from '@angular/core';
import {Jewellery} from "../interfaces";

@Pipe({
  name: 'armaniFilter'
})
export class ArmaniFilterPipe implements PipeTransform {

  transform(armani: Jewellery[], inputText: string): Jewellery[] {
    if (inputText === '') return null;
    return armani.filter(el => el['model'].toLocaleLowerCase().includes(inputText.toLocaleLowerCase()));
  }

}
