import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HeaderComponent } from '../components/header/header.component';



@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent,
    NosotrosComponent,
    HeaderComponent
  ]
})
export class PagesModule { }
