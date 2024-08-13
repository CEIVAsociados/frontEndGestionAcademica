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
  public curso:CursoEntity = new CursoEntity();
  public flgError:boolean = false;

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
          console.log(error.message);
          this.flgError = true;
        }
      }
    )
  }

  public salir(){
    this.router.navigate(["cursos"]);
  }
}
