import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisponibilidadObra } from 'src/app/models/disponibilidad-obra';
import { DisponibilidadObraService } from 'src/app/services/disponibilidad-obra.service';

@Component({
  selector: 'app-detalle-disponibilidad',
  templateUrl: './detalle-disponibilidad.component.html',
  styleUrls: ['./detalle-disponibilidad.component.css']
})
export class DetalleDisponibilidadComponent implements OnInit {

  disponibilidadDeObra: DisponibilidadObra = null;

  constructor(
    private disponibilidadDeObraService: DisponibilidadObraService,
    private activatedRoute: ActivatedRoute,
    //private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.disponibilidadDeObraService.detail(id).subscribe(
      data => {
        this.disponibilidadDeObra = data;
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
    this.router.navigate(['/lista-disponibilidad']);
  }

}
