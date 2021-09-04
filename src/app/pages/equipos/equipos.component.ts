import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { EquipoModel } from '../../models/equipo.models';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: EquipoModel []= [];
  cargando = false;

  termino="";


  constructor(private eS: EquipoService ) { }

  ngOnInit() {
    this.cargando = true;
    this.eS.getEquipos()
    .subscribe(resp =>{
      this.equipos = resp;
      this.cargando = false;
    })
  }

  borrarEquipo( equipo: EquipoModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ equipo.nombre }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.equipos.splice(i, 1);
        this.eS.borrarEquipo(equipo.id).subscribe();
      }

    });



  }

}
