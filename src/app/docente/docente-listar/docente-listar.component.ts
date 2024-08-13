import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteEntity } from 'src/app/entities/docente.entity';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-docente-listar',
  templateUrl: './docente-listar.component.html',
  styleUrls: ['./docente-listar.component.css']
})
export class DocenteListarComponent {

  docentes:DocenteEntity[] = [];
  docente: DocenteEntity = new DocenteEntity();

  constructor(
    private router:Router,
    private docenteService:DocenteService){

      docenteService.listarDocentes().subscribe(
        {
          next: (response:DocenteEntity[]) => {
            this.docentes = response;
          },
          error:(error: HttpErrorResponse) => {
            console.log(error.status.toString);
          }
        }
      );
  }

  public agregarDocente(){
    this.router.navigate(['docentes/add']);
  }

  public editarDocente(id:string){
    this.router.navigate(['docentes/', id]);
  }
}
