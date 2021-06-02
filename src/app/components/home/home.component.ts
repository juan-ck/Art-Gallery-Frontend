import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ArtworkInterface } from "../../models/artwork-interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  public artworks: ArtworkInterface;

  ngOnInit(): void {
    this.getListArtworks();
  }

  getListArtworks() {
    /*console.log("entro");
    this.dataApi.getAllArtworks()
    .subscribe((artworks) => console.log(artworks));*/
    this.dataApi.getAllArtworks()
    .subscribe((artworks: ArtworkInterface) => (this.artworks = artworks));
  }

}
