import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { DocenteEntity } from '../entities/docente.entity';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private url:string = environment.apiUrl;
  private httpHeaders: HttpHeaders=new HttpHeaders();

  constructor(private httpClient:HttpClient) {

    this.httpHeaders=this.httpHeaders.set("Content-Type","application/json");

  }

  public crearDocente(estudianteEntity:DocenteEntity){
    return this.httpClient.post<DocenteEntity>(this.url+"/docente",DocenteEntity);
  }
  
}
