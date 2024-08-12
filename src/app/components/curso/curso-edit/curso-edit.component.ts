import { Component } from '@angular/core';
import { CursoEntity } from '../../../entities/curso.entity';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent {
  curso:CursoEntity = new CursoEntity();

  constructor(
    private cursoService:CursoService,
    private router:Router
  ){

  }

  public modificarCurso(){
    this.cursoService.crearCurso(this.curso).subscribe(
      {
        next:(response:CursoEntity)=>{
          this.salir();
        },
        error:(error:HttpErrorResponse)=>{
          console.log(error.status);
          this.salir();
        }
      }
    )
  }

  public eliminar(){

  }

  public salir(){
    this.router.navigate(["cursos"]);
  }
}
