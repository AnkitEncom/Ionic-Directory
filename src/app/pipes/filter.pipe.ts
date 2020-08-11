import { Pipe, PipeTransform } from '@angular/core';
import { Chss } from '../models/chss.models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( lstdata: Chss[], texto: string): Chss[] {
    if (texto.length === 0) { return lstdata; }

    texto = texto.toLocaleLowerCase();
    return lstdata.filter( lstdata => {
      return lstdata.name.toLocaleLowerCase().includes(texto)
      || lstdata.description.toLocaleLowerCase().includes(texto)  ;
    });
  }
}
