import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoEntity } from 'src/app/entities/curso.entity';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent {

  cursos:CursoEntity[]=[];
  curso: CursoEntity = new CursoEntity();

  constructor(
    private cursoService:CursoService,
    private router:Router){
    cursoService.listarCursos().subscribe(
      {
        next: (response:CursoEntity[]) => {
          this.cursos = response;
        },
        error:(error: HttpErrorResponse) => {
          console.log(error.status.toString);
        }
      }
    );
  }


  public crearCurso(){

  }

}
