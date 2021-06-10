import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaObraService } from 'src/app/services/categoria-obra.service';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit {

  nombre = '';

  constructor(
    private categoriaDeObraService: CategoriaObraService,
    //private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const categoriaObra = new Categoria(this.nombre);
    this.categoriaDeObraService.save(categoriaObra).subscribe(
      data => {
        /*this.toastr.success('Producto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });*/
        this.router.navigate(['/lista-categoria']);
      },
      err => {
        /*this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });*/
         this.router.navigate(['/']);
      }
    );
  }

}
