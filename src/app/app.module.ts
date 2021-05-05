import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoSeleccionadoComponent } from './grupo-seleccionado/grupo-seleccionado.component';
import { VotoComponent } from './voto/voto.component';
import { FormsModule } from '@angular/forms';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppLayoutComponent,
    DashboardComponent,
    MiembrosComponent,
    GruposComponent,
    GrupoSeleccionadoComponent,
    VotoComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}