import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoObra } from 'src/app/models/tipo-obra';
import { TipoDeObraService } from 'src/app/services/tipo-de-obra.service';

@Component({
  selector: 'app-nueva-tipo',
  templateUrl: './nueva-tipo.component.html',
  styleUrls: ['./nueva-tipo.component.css']
})
export class NuevaTipoComponent implements OnInit {

  nombre = '';
  precio: number = null;

  constructor(
    private tiposDeObras: TipoDeObraService,
    //private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const tipoObra = new TipoObra(this.nombre);
    this.tiposDeObras.save(tipoObra).subscribe(
      data => {
        /*this.toastr.success('Producto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });*/
        this.router.navigate(['/lista-tipo']);
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
