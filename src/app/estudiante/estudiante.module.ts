import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteCrearComponent } from './estudiante-crear/estudiante-crear.component';
import { EstudianteListaComponent } from './estudiante-lista/estudiante-lista.component';
import { EstudianteDetalleComponent } from './estudiante-detalle/estudiante-detalle.component';
import { EstudianteEditarComponent } from './estudiante-editar/estudiante-editar.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';



@NgModule({
  declarations: [
    EstudianteCrearComponent,
    EstudianteListaComponent,
    EstudianteDetalleComponent,
    EstudianteEditarComponent,
    EstudianteComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
