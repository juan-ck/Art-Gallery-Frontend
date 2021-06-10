import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaObraService } from 'src/app/services/categoria-obra.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  categoriaObra: Categoria = null;

  constructor(
    private categoriaDeObraService: CategoriaObraService,
    private activatedRoute: ActivatedRoute,
    //private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.categoriaDeObraService.detail(id).subscribe(
      data => {
        this.categoriaObra = data;
      },
      err => {
        /*this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });*/
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.categoriaDeObraService.update(id, this.categoriaObra).subscribe(
      data => {
        /*this.toastr.success('Producto Actualizado', 'OK', {
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
