import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { CursoEntity } from '../entities/curso.entity';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private url:string = environment.apiUrl;
  private httpHeaders: HttpHeaders=new HttpHeaders();

  constructor(private httpClient:HttpClient) {

    this.httpHeaders=this.httpHeaders.set("Content-Type","application/json");

  }

  public crearCurso(cursoEntity:CursoEntity){
    return this.httpClient.post<CursoEntity>(this.url+"/curses",cursoEntity);
  }

}
