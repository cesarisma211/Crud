import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EquipoModel } from 'src/app/models/equipo.models';
import { EquipoService } from '../../services/equipo.service';

import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo =new EquipoModel();


  constructor(private eS: EquipoService, private route: ActivatedRoute) { }


  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id') || '';

    if ( id!=='nuevo' ) {

      this.eS.getEquipo( id )
        .subscribe( (resp: any) => {
          this.equipo = resp;
          this.equipo.id = id;
        });

    }

  }




    guardar( form: NgForm ) {

      if ( form.invalid ) {
        console.log('Formulario no válido');
        return;
      }
  
      Swal.fire({
        title: 'Espere',
        text: 'Guardando información',
        icon: 'info',
        allowOutsideClick: false
      });
      Swal.showLoading();
  
  
      let peticion: Observable<any>;
  
      if ( this.equipo.id ) {
        peticion = this.eS.actualizarEquipo( this.equipo );
      } else {
        peticion = this.eS.crearEquipo( this.equipo );
      }
  
      peticion.subscribe( resp => {
  
        Swal.fire({
          title: this.equipo.nombre,
          text: 'Se actualizó correctamente',
          icon: 'success'
        });
  
      });
  
    }
  }