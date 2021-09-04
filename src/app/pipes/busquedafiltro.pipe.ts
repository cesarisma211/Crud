import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedafiltro'
})
export class BusquedafiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const termino = [];
    for(const post of value){
      if(post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        termino.push(post);
      };
    };
    return termino;
  }

}
