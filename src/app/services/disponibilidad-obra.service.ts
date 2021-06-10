import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DisponibilidadObra } from '../models/disponibilidad-obra';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadObraService {

  disponibilidadObraUrl = 'http://localhost:8080/disponibilidad-de-obra/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<DisponibilidadObra[]> {
    return this.httpClient.get<DisponibilidadObra[]>(this.disponibilidadObraUrl + 'lista');
  }

  public detail(id: number): Observable<DisponibilidadObra> {
    return this.httpClient.get<DisponibilidadObra>(this.disponibilidadObraUrl + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<DisponibilidadObra> {
    return this.httpClient.get<DisponibilidadObra>(this.disponibilidadObraUrl + `detailname/${nombre}`);
  }

  public save(disponibilidad: DisponibilidadObra): Observable<any> {
    return this.httpClient.post<any>(this.disponibilidadObraUrl + 'create', disponibilidad);
  }

  public update(id: number, disponibilidad: DisponibilidadObra): Observable<any> {
    return this.httpClient.put<any>(this.disponibilidadObraUrl + `update/${id}`, disponibilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.disponibilidadObraUrl + `delete/${id}`);
  }
}
