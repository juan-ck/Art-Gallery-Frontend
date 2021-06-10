import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Obra } from 'src/app/models/obra';
import { TipoObra } from 'src/app/models/tipo-obra';
import { ObraService } from 'src/app/services/obra.service';
import { TipoDeObraService } from 'src/app/services/tipo-de-obra.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-lista-obra',
  templateUrl: './lista-obra.component.html',
  styleUrls: ['./lista-obra.component.css']
})
export class ListaObraComponent implements OnInit {

  obras: Obra[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private obrasService: ObraService,
    //private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.cargarObras();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarObras(): void {
    this.obrasService.lista().subscribe(
      data => {
        console.log("esta es la data " + data);
        this.obras = data;
      },
      err => {
        console.log("Se mamo");
      }
    );
  }

  borrar(id: number) {
    this.obrasService.delete(id).subscribe(
      data => {
        /*this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });*/
        this.cargarObras();
      },
      err => {
        /*this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });*/
      }
    );
  }

}
