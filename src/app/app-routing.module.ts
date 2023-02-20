import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPresupuestoComponent } from './components/agregar-presupuesto/agregar-presupuesto.component';
import { Error404Component } from './components/error404/error404.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [

    { path: '', component: AgregarPresupuestoComponent },
    { 
        path: 'agregar-presupuesto', 
        component: AgregarPresupuestoComponent
    },
    { path: 'gastos', component: GastosComponent },
    { path: '**', component: Error404Component, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
