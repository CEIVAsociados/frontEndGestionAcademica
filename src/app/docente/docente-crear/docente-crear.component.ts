import { Component } from '@angular/core';
import { DocenteEntity } from '../../entities/docente.entity';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-docente-crear',
  templateUrl: './docente-crear.component.html',
  styleUrls: ['./docente-crear.component.css']
})
export class DocenteCrearComponent {
  docente:DocenteEntity = new DocenteEntity();

  constructor(
    private docenteService:DocenteService,
    private router:Router
  ){

  }

  public crearDocente(){
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
