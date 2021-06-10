import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoSesion } from '../models/estado-sesion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoSesionService {

  estadoSesionUrl = 'http://localhost:8080/estado-sesion/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<EstadoSesion[]> {
    return this.httpClient.get<EstadoSesion[]>(this.estadoSesionUrl + 'lista');
  }

  public detail(id: number): Observable<EstadoSesion> {
    return this.httpClient.get<EstadoSesion>(this.estadoSesionUrl + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<EstadoSesion> {
    return this.httpClient.get<EstadoSesion>(this.estadoSesionUrl + `detailname/${nombre}`);
  }

  public save(estadoSesion: EstadoSesion): Observable<any> {
    return this.httpClient.post<any>(this.estadoSesionUrl + 'create', estadoSesion);
  }

  public update(id: number, estadoSesion: EstadoSesion): Observable<any> {
    return this.httpClient.put<any>(this.estadoSesionUrl + `update/${id}`, estadoSesion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.estadoSesionUrl + `delete/${id}`);
  }
}
