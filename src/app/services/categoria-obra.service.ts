import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaObraService {

  categoriaObraUrl = 'http://localhost:8080/categoria-de-obra/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.categoriaObraUrl + 'lista');
  }

  public detail(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(this.categoriaObraUrl + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Categoria> {
    return this.httpClient.get<Categoria>(this.categoriaObraUrl + `detailname/${nombre}`);
  }

  public save(categoria: Categoria): Observable<any> {
    return this.httpClient.post<any>(this.categoriaObraUrl + 'create', categoria);
  }

  public update(id: number, categoria: Categoria): Observable<any> {
    return this.httpClient.put<any>(this.categoriaObraUrl + `update/${id}`, categoria);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.categoriaObraUrl + `delete/${id}`);
  }
}
