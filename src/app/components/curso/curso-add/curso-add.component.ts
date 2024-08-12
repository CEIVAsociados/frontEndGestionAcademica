import { Component } from '@angular/core';
import { CursoEntity } from '../../../entities/curso.entity';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-curso-add',
  templateUrl: './curso-add.component.html',
  styleUrls: ['./curso-add.component.css']
})
export class CursoAddComponent {
  curso:CursoEntity = new CursoEntity();

  constructor(
    private cursoService:CursoService,
    private router:Router
  ){

  }

  public crearCurso(){
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

  public salir(){
    this.router.navigate(["cursos"]);
  }
}
