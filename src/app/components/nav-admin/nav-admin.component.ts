import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent {

  constructor(private router:Router){

  }

  public cursos(){
    this.router.navigate(['cursos']);
  }

  public profesores(){
    this.router.navigate(['docentes']);
  }

  public alumnos(){
    this.router.navigate(['estudiantes']);
  }

  public salir(){
    this.router.navigate(['login']);
  }

  public admin(){
    this.router.navigate(['administrador']);
  }
}
