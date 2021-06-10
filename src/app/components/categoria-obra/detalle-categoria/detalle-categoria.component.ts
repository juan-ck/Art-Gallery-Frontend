import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaObraService } from 'src/app/services/categoria-obra.service';

@Component({
  selector: 'app-detalle-categoria',
  templateUrl: './detalle-categoria.component.html',
  styleUrls: ['./detalle-categoria.component.css']
})
export class DetalleCategoriaComponent implements OnInit {

  categoriaDeObra: Categoria = null;

  constructor(
    private categoriaService: CategoriaObraService,
    private activatedRoute: ActivatedRoute,
    //private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.categoriaService.detail(id).subscribe(
      data => {
        this.categoriaDeObra = data;
      },
      err => {
        /*this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });*/
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/lista-categoria']);
  }

}
