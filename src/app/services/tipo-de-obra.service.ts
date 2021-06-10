import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoObra } from '../models/tipo-obra';

@Injectable({
  providedIn: 'root'
})
export class TipoDeObraService {

  tipoDeObraUrl = 'http://localhost:8080/tipo-de-obra/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<TipoObra[]> {
    return this.httpClient.get<TipoObra[]>(this.tipoDeObraUrl + 'lista');
  }

  public detail(id: number): Observable<TipoObra> {
    return this.httpClient.get<TipoObra>(this.tipoDeObraUrl + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<TipoObra> {
    return this.httpClient.get<TipoObra>(this.tipoDeObraUrl + `detailname/${nombre}`);
  }

  public save(producto: TipoObra): Observable<any> {
    return this.httpClient.post<any>(this.tipoDeObraUrl + 'create', producto);
  }

  public update(id: number, producto: TipoObra): Observable<any> {
    return this.httpClient.put<any>(this.tipoDeObraUrl + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.tipoDeObraUrl + `delete/${id}`);
  }
}
