import { Pipe, PipeTransform } from '@angular/core';
import {Jewellery} from "../interfaces";

@Pipe({
  name: 'cartierFilter'
})
export class CartierFilterPipe implements PipeTransform {

  transform(cartier: Jewellery[], inputText: string): Jewellery[] {
    if (inputText === '') return null;
    return cartier.filter(el => el['model'].toLocaleLowerCase().includes(inputText.toLocaleLowerCase()));
  }

}
