import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaObraService } from 'src/app/services/categoria-obra.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  categoriaDeObra: Categoria[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private categoriaDeObraService: CategoriaObraService,
    //private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.cargarCategoriaDeObras();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarCategoriaDeObras(): void {
    this.categoriaDeObraService.lista().subscribe(
      data => {
        this.categoriaDeObra = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.categoriaDeObraService.delete(id).subscribe(
      data => {
        /*this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });*/
        this.cargarCategoriaDeObras();
      },
      err => {
        /*this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });*/
      }
    );
  }

}
