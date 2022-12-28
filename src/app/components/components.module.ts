import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyInicioComponent } from './body-inicio/body-inicio.component';
import { BodyNosotrosComponent } from './body-nosotros/body-nosotros.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BodyInicioComponent,
    BodyNosotrosComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    BodyInicioComponent,
    BodyNosotrosComponent
  ]
})
export class ComponentsModule { }
