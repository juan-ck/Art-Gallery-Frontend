import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@Angular/common/http"
import { Observable } from "rxjs/internal/observable"
import { map } from 'rxjs/operators';

import{ ArtworkInterface } from "../models/artwork-interface";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient) { }

  artworks: Observable<any>;
  artwork: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
    //Authorization: this.authService.getToken()
  });

  getAllArtworks() {
    const urlApi = 'api/artwork-category';
    return this.http.get(urlApi);
  }

  getArtworkById(id: Number) {
    const urlApi = `api/artwork/${id}`;
    return (this.artwork = this.http.get(urlApi));
  }

  saveArtwork(artwork: ArtworkInterface) {
    //TODO: Obtener token
    //TODO: not null
    //let token = this.authService.getToken;
    const urlApi = `/superro`;
    return this.http.post<ArtworkInterface>(urlApi, artwork, {headers: this.headers})
    .pipe(map(data => data));
  }

  updateArtwork(artwork) {
    //TODO: Obtener token
    //TODO: not null
    //let token = this.authService.getToken;
    const urlApi = `/superro`;
    return this.http.put<ArtworkInterface>(urlApi, artwork, {headers: this.headers})
    .pipe(map(data => data));
  }

  deleteArtwork(id: number, artwork) {
    //TODO: Obtener token
    //TODO: not null
    //let token = this.authService.getToken;
    const urlApi = `/superro`;
    return this.http.put<ArtworkInterface>(urlApi, artwork, {headers: this.headers})
    .pipe(map(data => data));
  }
}
