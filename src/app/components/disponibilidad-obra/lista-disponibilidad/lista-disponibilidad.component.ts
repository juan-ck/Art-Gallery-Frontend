import { Component, OnInit } from '@angular/core';
import { DisponibilidadObra } from 'src/app/models/disponibilidad-obra';
import { DisponibilidadObraService } from 'src/app/services/disponibilidad-obra.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-lista-disponibilidad',
  templateUrl: './lista-disponibilidad.component.html',
  styleUrls: ['./lista-disponibilidad.component.css']
})
export class ListaDisponibilidadComponent implements OnInit {

  disponibilidadObra: DisponibilidadObra[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private disponibilidadObraService: DisponibilidadObraService,
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
    this.disponibilidadObraService.lista().subscribe(
      data => {
        this.disponibilidadObra = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.disponibilidadObraService.delete(id).subscribe(
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
