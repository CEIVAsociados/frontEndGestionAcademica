import { Component } from '@angular/core';
import { CursoEntity } from '../../../entities/curso.entity';
import { Router, ActivatedRoute } from '@angular/router';
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
    private router:Router,
    private activatedRouter:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.cursoService.getCurso( this.activatedRouter.snapshot.params['id'] ).subscribe(
      {
        next:(response:CursoEntity)=>{
          this.curso = response;
        },
        error:(error:HttpErrorResponse)=>{
          console.log(error.status);
        }
      }
    );
  }


  public modificarCurso(){
    this.cursoService.modificarCurso(this.curso).subscribe(
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
    this.cursoService.eliminarCurso(this.curso._id).subscribe(
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
