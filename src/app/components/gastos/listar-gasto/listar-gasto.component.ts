import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
    selector: 'app-listar-gasto',
    templateUrl: './listar-gasto.component.html',
    styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit/* , OnDestroy */ {

    subscription!: Subscription;
    presupuesto!:  number;
    restante!:     number;
    listaGastos: any[] = [];

    constructor(private _presupuestoService: PresupuestoService) {

        // Recibir el observable suscribiendonos
        this._presupuestoService.obtenerGasto().subscribe( data => {

            // Restamos
            this.restante = this.restante - data.monto;

            // llenar listaGastos
            this.listaGastos.push( data );
        });        
    }

    ngOnInit(): void {

        this.presupuesto = this._presupuestoService.total;
        this.restante    = this._presupuestoService.restante;
    }

    ngOnDestroy(): void {

        if ( typeof this.subscription != 'undefined' ) {

            // Eliminar la suscripcion
            this.subscription.unsubscribe();
        }        
    }

    alertEstadoRestante(): string {

        if ( ( this.presupuesto / 4 ) > this.restante ) {
            return 'alert alert-danger';            
        } 
        
        if ( ( this.presupuesto / 2 ) > this.restante ) {
            return 'alert alert-warning';        
        }

        return 'alert alert-secondary';
    }

}
