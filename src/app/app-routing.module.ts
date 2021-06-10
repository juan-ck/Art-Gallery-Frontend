import { Component, NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { LoginComponent } from "./components/auth/login.component";
import { RegistroComponent } from "./components/auth/registro.component";
import { DetalleCategoriaComponent } from "./components/categoria-obra/detalle-categoria/detalle-categoria.component";
import { EditarCategoriaComponent } from "./components/categoria-obra/editar-categoria/editar-categoria.component";
import { ListaCategoriaComponent } from "./components/categoria-obra/lista-categoria/lista-categoria.component";
import { NuevaCategoriaComponent } from "./components/categoria-obra/nueva-categoria/nueva-categoria.component";
import { ListaDisponibilidadComponent } from "./components/disponibilidad-obra/lista-disponibilidad/lista-disponibilidad.component";
import { HomeComponent } from "./components/home/home.component"
import { IndexComponent } from "./components/index/index.component";
import { ListaObraComponent } from "./components/obra/lista-obra/lista-obra.component";
import { NuevaObraComponent } from "./components/obra/nueva-obra/nueva-obra.component";
import { DetalleTipoComponent } from "./components/tipo-obra/detalle-tipo/detalle-tipo.component";
import { EditarTipoComponent } from "./components/tipo-obra/editar-tipo/editar-tipo.component";
import { ListaTipoComponent } from "./components/tipo-obra/lista-tipo/lista-tipo.component";
import { NuevaTipoComponent } from "./components/tipo-obra/nueva-tipo/nueva-tipo.component";
import { GuardService as guard } from './guards/guard.service';

const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'lista', component: ListaObraComponent},
    {path: 'lista-tipo', component: ListaTipoComponent},
    {path: 'lista-tipo/detalle/:id', component: DetalleTipoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    {path: 'lista-tipo/nuevo', component: NuevaTipoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
    {path: 'lista-tipo/editar/:id', component: EditarTipoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
    {path: 'lista-categoria', component: ListaCategoriaComponent},
    {path: 'lista-categoria/detalle/:id', component: DetalleCategoriaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    {path: 'lista-categoria/nuevo', component: NuevaCategoriaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
    {path: 'lista-categoria/editar/:id', component: EditarCategoriaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
    {path: 'lista-disponibilidad', component: ListaDisponibilidadComponent},
    {path: 'lista-disponibilidad/detalle/:id', component: DetalleTipoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    {path: 'lista-disponibilidad/nuevo', component: NuevaTipoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
    {path: 'lista-disponibilidad/editar/:id', component: EditarTipoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}