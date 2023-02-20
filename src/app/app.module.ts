import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { AgregarPresupuestoComponent } from './components/agregar-presupuesto/agregar-presupuesto.component';
import { AgregarGastoComponent } from './components/gastos/agregar-gasto/agregar-gasto.component';
import { ListarGastoComponent } from './components/gastos/listar-gasto/listar-gasto.component';

import { FormsModule } from '@angular/forms';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    AgregarPresupuestoComponent,
    AgregarGastoComponent,
    ListarGastoComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
