import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Obra } from '../models/obra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
 
  obraUrl = 'http://localhost:8080/obra/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Obra[]> {
    return this.httpClient.get<Obra[]>(this.obraUrl + 'lista');
  }

  public detail(id: number): Observable<Obra> {
    return this.httpClient.get<Obra>(this.obraUrl + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Obra> {
    return this.httpClient.get<Obra>(this.obraUrl + `detailname/${nombre}`);
  }

  public save(obra: Obra): Observable<any> {
    return this.httpClient.post<any>(this.obraUrl + 'create', obra);
  }

  public update(id: number, obra: Obra): Observable<any> {
    return this.httpClient.put<any>(this.obraUrl + `update/${id}`, obra);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.obraUrl + `delete/${id}`);
  }
}
