import { Injectable } from '@angular/core';
import { EquipoModel } from 'src/app/models/equipo.models';
import { HttpClient } from '@angular/common/http';


import { delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipos: EquipoModel []= [];

  private url = 'https://crud-a608c.firebaseio.com';
  constructor(private http: HttpClient) { 

  }

  crearEquipo(equipo: EquipoModel){
    return this.http.post(`${this.url}/equipos.json`, equipo)
    .pipe(
      map((resp:any) =>{
      equipo.id = resp.name;
      return equipo;
    }));

  }

  actualizarEquipo(equipo: EquipoModel){
    const equipoTemp ={
      ...equipo
    };
    return (this.http.put(`${this.url}/equipos/${equipo.id}.json`,equipoTemp));

  }

  getEquipos() {
    return this.http.get(`${ this.url }/equipos.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }

  private crearArreglo( equiposObj: any ) {

    const equipos: EquipoModel[] = [];

    if(equiposObj === null){return[]}

    Object.keys( equiposObj ).forEach( (key) => {

      const equipo: EquipoModel = equiposObj[key];
      equipo.id = key;

      equipos.push( equipo );
    });


    return equipos;

  }





  
  getEquipo( id: string ) {

    return this.http.get(`${ this.url }/equipos/${id}.json`);
  }



  borrarEquipo(id: string){
   return this.http.delete(`${this.url}/equipos/${id}.json`);
 }

 

  
}



