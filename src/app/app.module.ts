import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EquiposComponent } from './pages/equipos/equipos.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BusquedafiltroPipe } from './pipes/busquedafiltro.pipe';
  


@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    EquipoComponent,
    BusquedafiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
