import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoObra } from 'src/app/models/tipo-obra';
import { TipoDeObraService } from 'src/app/services/tipo-de-obra.service';

@Component({
  selector: 'app-detalle-tipo',
  templateUrl: './detalle-tipo.component.html',
  styleUrls: ['./detalle-tipo.component.css']
})
export class DetalleTipoComponent implements OnInit {

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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/lista-tipo']);
  }

}
