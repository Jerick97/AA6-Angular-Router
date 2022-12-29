import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path:'',component:InicioComponent}, //redireccionar al Inicio
  {path:'inicio',component:InicioComponent},//redireccionar al Inicio
  {path:'nosotros',component:NosotrosComponent},//redireccionar al Nosotros
  {path:'servicios',component:ServiciosComponent},//redireccionar al Servicios
  {path:'contactos',component:ContactosComponent},//redireccionar al Contactos
  { path: '**',pathMatch:'full',redirectTo: '' }// cualquier url redirigir al Inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
