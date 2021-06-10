import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisponibilidadObra } from 'src/app/models/disponibilidad-obra';
import { DisponibilidadObraService } from 'src/app/services/disponibilidad-obra.service';

@Component({
  selector: 'app-editar-disponibilidad',
  templateUrl: './editar-disponibilidad.component.html',
  styleUrls: ['./editar-disponibilidad.component.css']
})
export class EditarDisponibilidadComponent implements OnInit {

  disponibilidadObra: DisponibilidadObra = null;

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
        this.disponibilidadObra = data;
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
    this.disponibilidadDeObraService.update(id, this.disponibilidadObra).subscribe(
      data => {
        /*this.toastr.success('Producto Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });*/
        this.router.navigate(['/lista-disponibilidad']);
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
