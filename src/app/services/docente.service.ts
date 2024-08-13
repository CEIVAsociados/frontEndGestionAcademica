import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { DocenteEntity } from '../entities/docente.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private url:string = environment.apiUrl;
  private httpHeaders: HttpHeaders=new HttpHeaders();

  constructor(private httpClient:HttpClient) {

    this.httpHeaders=this.httpHeaders.set("Content-Type","application/json");

  }

  public crearDocente(docenteEntity:DocenteEntity){
    return this.httpClient.post<DocenteEntity>(this.url+"/docentes",docenteEntity);
  }

  public listarDocentes():Observable<DocenteEntity[]>{
    return this.httpClient.get<DocenteEntity[]>(this.url+"/docentes",{headers:this.httpHeaders});
  }

  public getDocente(id:string):Observable<DocenteEntity>{
    return this.httpClient.get<DocenteEntity>(this.url+"/docentes/"+id,{headers:this.httpHeaders});
  }

  public modificarDocente(docenteEntity:DocenteEntity):Observable<DocenteEntity>{
    return this.httpClient.patch<DocenteEntity>(this.url+"/docentes/"+docenteEntity._id,docenteEntity);
  }

  public eliminarDocente(id:string):Observable<DocenteEntity>{
    return this.httpClient.delete<DocenteEntity>(this.url+"/docentes/"+id);
  }
  
}
