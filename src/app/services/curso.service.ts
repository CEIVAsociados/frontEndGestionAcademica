import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { CursoEntity } from '../entities/curso.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private url:string = environment.apiUrl;
  private httpHeaders: HttpHeaders=new HttpHeaders();

  constructor(private httpClient:HttpClient) {

    this.httpHeaders=this.httpHeaders.set("Content-Type","application/json");

  }

  public crearCurso(cursoEntity:CursoEntity):Observable<CursoEntity>{
    return this.httpClient.post<CursoEntity>(this.url+"/courses",cursoEntity);
  }

  public listarCursos():Observable<CursoEntity[]>{
    return this.httpClient.get<CursoEntity[]>(this.url+"/courses",{headers:this.httpHeaders});
  }

  public getCurso(id:string):Observable<CursoEntity>{
    return this.httpClient.get<CursoEntity>(this.url+"/courses/"+id,{headers:this.httpHeaders});
  }

  public modificarCurso(cursoEntity:CursoEntity):Observable<CursoEntity>{
    return this.httpClient.patch<CursoEntity>(this.url+"/courses/"+cursoEntity._id,cursoEntity);
  }

  public eliminarCurso(id:string):Observable<CursoEntity>{
    return this.httpClient.delete<CursoEntity>(this.url+"/courses/"+id);
  }

}
