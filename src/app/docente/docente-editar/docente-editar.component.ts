import { Component } from '@angular/core';
import { DocenteEntity } from '../../entities/docente.entity';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-docente-editar',
  templateUrl: './docente-editar.component.html',
  styleUrls: ['./docente-editar.component.css']
})
export class DocenteEditarComponent {
  docente:DocenteEntity = new DocenteEntity();

  constructor(
    private docenteService:DocenteService,
    private router:Router
  ){

  }

  public editarDocente(){
    this.docenteService.crearDocente(this.docente).subscribe(
      {
        next:(response:DocenteEntity)=>{
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
    this.router.navigate(["docente"]);
  }
}
