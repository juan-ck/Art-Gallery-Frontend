import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DisponibilidadUsuario } from '../models/disponibilidad-usuario';

@Injectable({
  providedIn: 'root'
})
export class DisponiblidadUsuarioService {

  disponibilidadUsuarioUrl = 'http://localhost:8080/disponibilidad-de-usuario/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<DisponibilidadUsuario[]> {
    return this.httpClient.get<DisponibilidadUsuario[]>(this.disponibilidadUsuarioUrl + 'lista');
  }

  public detail(id: number): Observable<DisponibilidadUsuario> {
    return this.httpClient.get<DisponibilidadUsuario>(this.disponibilidadUsuarioUrl + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<DisponibilidadUsuario> {
    return this.httpClient.get<DisponibilidadUsuario>(this.disponibilidadUsuarioUrl + `detailname/${nombre}`);
  }

  public save(disponibilidad: DisponibilidadUsuario): Observable<any> {
    return this.httpClient.post<any>(this.disponibilidadUsuarioUrl + 'create', disponibilidad);
  }

  public update(id: number, disponibilidad: DisponibilidadUsuario): Observable<any> {
    return this.httpClient.put<any>(this.disponibilidadUsuarioUrl + `update/${id}`, disponibilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.disponibilidadUsuarioUrl + `delete/${id}`);
  }
}
