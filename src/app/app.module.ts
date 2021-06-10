import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Services
import { DataApiService } from './services/data-api.service';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './components/auth/registro.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/auth/login.component';
import { interceptorProvider } from './interceptors/interceptor.service';
import { DetalleObraComponent } from './components/obra/detalle-obra/detalle-obra.component';
import { EditarObraComponent } from './components/obra/editar-obra/editar-obra.component';
import { ListaObraComponent } from './components/obra/lista-obra/lista-obra.component';
import { NuevaObraComponent } from './components/obra/nueva-obra/nueva-obra.component';
import { NuevaTipoComponent } from './components/tipo-obra/nueva-tipo/nueva-tipo.component';
import { ListaTipoComponent } from './components/tipo-obra/lista-tipo/lista-tipo.component';
import { DetalleTipoComponent } from './components/tipo-obra/detalle-tipo/detalle-tipo.component';
import { EditarTipoComponent } from './components/tipo-obra/editar-tipo/editar-tipo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './components/slider/slider.component';
import { ListaCategoriaComponent } from './components/categoria-obra/lista-categoria/lista-categoria.component';
import { DetalleCategoriaComponent } from './components/categoria-obra/detalle-categoria/detalle-categoria.component';
import { EditarCategoriaComponent } from './components/categoria-obra/editar-categoria/editar-categoria.component';
import { NuevaCategoriaComponent } from './components/categoria-obra/nueva-categoria/nueva-categoria.component';
import { ListaDisponibilidadComponent } from './components/disponibilidad-obra/lista-disponibilidad/lista-disponibilidad.component';
import { DetalleDisponibilidadComponent } from './components/disponibilidad-obra/detalle-disponibilidad/detalle-disponibilidad.component';
import { EditarDisponibilidadComponent } from './components/disponibilidad-obra/editar-disponibilidad/editar-disponibilidad.component';
import { NuevaDisponibilidadComponent } from './components/disponibilidad-obra/nueva-disponibilidad/nueva-disponibilidad.component';
//import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
    DetalleObraComponent,
    EditarObraComponent,
    ListaObraComponent,
    NuevaObraComponent,
    ListaTipoComponent,
    NuevaTipoComponent,
    DetalleTipoComponent,
    EditarTipoComponent,
    SliderComponent,
    ListaCategoriaComponent,
    DetalleCategoriaComponent,
    EditarCategoriaComponent,
    NuevaCategoriaComponent,
    ListaDisponibilidadComponent,
    DetalleDisponibilidadComponent,
    EditarDisponibilidadComponent,
    NuevaDisponibilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule/*,
    BrowserAnimationsModule,
    ToastrModule.forRoot()*/
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
