import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisponibilidadUsuario } from 'src/app/models/disponibilidad-usuario';
import { EstadoSesion } from 'src/app/models/estado-sesion';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario: NuevoUsuario;
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;
  estadoSesion: EstadoSesion;
  disponibilidadUsuario: DisponibilidadUsuario

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    //private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password, this.estadoSesion, this.disponibilidadUsuario);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        /*this.toastr.success('Cuenta Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });*/

        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        /*this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });*/
         console.log(err.error.message);
      }
    );
  }

}
