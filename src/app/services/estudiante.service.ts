import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { EstudianteEntity } from '../entities/estudiante.entity';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url:string = environment.apiUrl;
  private httpHeaders: HttpHeaders=new HttpHeaders();

  constructor(private httpClient:HttpClient) {

    this.httpHeaders=this.httpHeaders.set("Content-Type","application/json");

  }

  public crearEstudiante(estudianteEntity:EstudianteEntity){
    return this.httpClient.post<EstudianteEntity>(this.url+"/estudiante",estudianteEntity);
  }
  
}
