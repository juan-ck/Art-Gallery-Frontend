import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoObra } from 'src/app/models/tipo-obra';
import { TipoDeObraService } from 'src/app/services/tipo-de-obra.service';

@Component({
  selector: 'app-editar-tipo',
  templateUrl: './editar-tipo.component.html',
  styleUrls: ['./editar-tipo.component.css']
})
export class EditarTipoComponent implements OnInit {

  tipoDeObra: TipoObra = null;

  constructor(
    private tipoDeObraService: TipoDeObraService,
    private activatedRoute: ActivatedRoute,
    //private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.tipoDeObraService.detail(id).subscribe(
      data => {
        this.tipoDeObra = data;
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
    this.tipoDeObraService.update(id, this.tipoDeObra).subscribe(
      data => {
        /*this.toastr.success('Producto Actualizado', 'OK', {
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
