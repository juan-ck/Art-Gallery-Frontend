import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisponibilidadObra } from 'src/app/models/disponibilidad-obra';
import { DisponibilidadObraService } from 'src/app/services/disponibilidad-obra.service';

@Component({
  selector: 'app-nueva-disponibilidad',
  templateUrl: './nueva-disponibilidad.component.html',
  styleUrls: ['./nueva-disponibilidad.component.css']
})
export class NuevaDisponibilidadComponent implements OnInit {

  nombre = '';

  constructor(
    private disponibilidadDeObraService: DisponibilidadObraService,
    //private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const disponibilidadDeObra = new DisponibilidadObra(this.nombre);
    this.disponibilidadDeObraService.save(disponibilidadDeObra).subscribe(
      data => {
        /*this.toastr.success('Producto Creado', 'OK', {
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
