import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  {path:'',component:InicioComponent}, //redireccionar al Inicio
  {path:'inicio',component:InicioComponent},//redireccionar al Inicio
  {path:'nosotros',component:NosotrosComponent},//redireccionar al Nosotros
  { path: '**', redirectTo: '' }// cualquier url redirigir al Inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
