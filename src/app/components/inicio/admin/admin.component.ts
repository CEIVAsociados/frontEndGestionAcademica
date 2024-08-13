import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router:Router){

  }

  public cursos(){
    this.router.navigate(['cursos']);
  }

  public alumnos(){
    this.router.navigate(['estudiantes']);
  }

  public profesores(){
    this.router.navigate(['docentes']);
  }
}
