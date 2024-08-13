import { Component } from '@angular/core';
import { EstudianteEntity } from '../../entities/estudiante.entity';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EstudianteService } from '../../services/estudiante.service';


@Component({
  selector: 'app-estudiante-editar',
  templateUrl: './estudiante-editar.component.html',
  styleUrls: ['./estudiante-editar.component.css']
})
export class EstudianteEditarComponent {
  estudiante:EstudianteEntity = new EstudianteEntity();

  constructor(
    private estudianteService:EstudianteService,
    private router:Router
  ){

  }

  public editarEstudiante(){
    this.estudianteService.crearEstudiante(this.estudiante).subscribe(
      {
        next:(response:EstudianteEntity)=>{
          this.salir();
        },
        error:(error:HttpErrorResponse)=>{
          console.log(error.status);
          this.salir();
        }
      }
    )
  }

  public salir(){
    this.router.navigate(["estudiante"]);
  }


}
