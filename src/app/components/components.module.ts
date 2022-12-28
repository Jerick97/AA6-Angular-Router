import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyInicioComponent } from './body-inicio/body-inicio.component';
import { BodyNosotrosComponent } from './body-nosotros/body-nosotros.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BodyInicioComponent,
    BodyNosotrosComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
