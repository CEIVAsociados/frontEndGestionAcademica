import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { UserEntity } from '../entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string = environment.apiUrl;
  private httpHeaders: HttpHeaders=new HttpHeaders();

  constructor(private httpClient:HttpClient) {

    this.httpHeaders=this.httpHeaders.set("Content-Type","application/json");

  }

  public login(userEntity:UserEntity){
    return this.httpClient.post<UserEntity>(this.url+"/auth/login",userEntity);
  }

  
}
