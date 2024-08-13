import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserEntity } from 'src/app/entities/user.entity';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  estudiante:Number = 3;
  docente:Number = 2;
  admin:Number = 1;

  user:UserEntity = new UserEntity();

  constructor(private loginService:LoginService, private router:Router){

  }

  public login(user:UserEntity){
    this.loginService.login(this.user).subscribe({
      next:(response:any)=>{
        console.log("role: " + response.role);

        if(response.role == this.admin){
          this.router.navigate(['administrador']);
        }
        if(response.role == this.docente){
          this.router.navigate(['profesores']);
        }
        if(response.role == this.estudiante ){
          this.router.navigate(['alumno']);
        }
        
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.status)
        this.limpiar();
      }
    });
    
  }

  public limpiar(){
    this.user = new UserEntity();
    this.router.navigate(["login"]);
  }
}
