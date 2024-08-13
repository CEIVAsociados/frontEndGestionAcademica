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
  user:UserEntity = new UserEntity();

  constructor(private loginService:LoginService, private router:Router){

  }

  public login(){
    this.loginService.login(this.user).subscribe({
      next:(response:UserEntity)=>{
        console.log(response.userName)
        this.router.navigate(['cursos']);
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
