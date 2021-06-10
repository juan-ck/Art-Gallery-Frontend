import { Categoria } from "./categoria";
import { DisponibilidadObra } from "./disponibilidad-obra";
import { TipoObra } from "./tipo-obra";

export class Obra {
    nombre: string;
    descripcion: string;
    imagen: string;
    valor: number;
    categoria: Categoria;
    tipo: TipoObra;
    disponibilidad: DisponibilidadObra;
    authorities: string[];

    constructor(nombre: string, descripcion: string, imagen: string, valor: number, 
        categoria: Categoria, tipo: TipoObra, disponibilidad: DisponibilidadObra){
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.imagen = imagen;
            this.valor = valor;
            this.categoria = categoria;
            this.tipo = tipo;
            this.disponibilidad = disponibilidad;
    }
}