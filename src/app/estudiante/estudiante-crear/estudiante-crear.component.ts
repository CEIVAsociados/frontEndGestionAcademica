import { Component } from '@angular/core';
import { EstudianteEntity } from '../../entities/estudiante.entity';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-estudiante-crear',
  templateUrl: './estudiante-crear.component.html',
  styleUrls: ['./estudiante-crear.component.css']
})
export class EstudianteCrearComponent {
  estudiante:EstudianteEntity = new EstudianteEntity();

  constructor(
    private estudianteService:EstudianteService,
    private router:Router
  ){

  }

  public crearEstudiante(){
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
