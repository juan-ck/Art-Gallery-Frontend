import { DisponibilidadUsuario } from "./disponibilidad-usuario";
import { EstadoSesion } from "./estado-sesion";

export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    email: string;
    password: string;
    estadoSesion: EstadoSesion;
    disponibilidadUsuario: DisponibilidadUsuario;
    constructor(nombre: string, nombreUsuario: string, email: string, password: string,
        estadoSesion: EstadoSesion, disponibilidadUsuario: DisponibilidadUsuario) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.estadoSesion = estadoSesion;
        this.disponibilidadUsuario = disponibilidadUsuario;
    }
}
