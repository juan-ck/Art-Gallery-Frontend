import { Component, OnInit } from '@angular/core';
import { TipoObra } from 'src/app/models/tipo-obra';
import { TipoDeObraService } from 'src/app/services/tipo-de-obra.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-lista-tipo',
  templateUrl: './lista-tipo.component.html',
  styleUrls: ['./lista-tipo.component.css']
})
export class ListaTipoComponent implements OnInit {

  tipoDeObra: TipoObra[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private tiposDeObraService: TipoDeObraService,
    //private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.cargarTipoDeObras();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarTipoDeObras(): void {
    this.tiposDeObraService.lista().subscribe(
      data => {
        this.tipoDeObra = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.tiposDeObraService.delete(id).subscribe(
      data => {
        /*this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });*/
        this.cargarTipoDeObras();
      },
      err => {
        /*this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });*/
      }
    );
  }

}
