import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { EquipoComponent } from './pages/equipo/equipo.component';

const routes: Routes = [
  {path:'equipos', component: EquiposComponent},
  {path:'equipo/:id', component: EquipoComponent},
  {path:'**',pathMatch:'full', redirectTo:'equipos'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
