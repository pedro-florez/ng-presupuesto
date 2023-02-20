import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { isNumeroPositivo } from 'src/app/helpers/Utilitys';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
    selector: 'app-agregar-presupuesto',
    templateUrl: './agregar-presupuesto.component.html',
    styleUrls: ['./agregar-presupuesto.component.css']
})
export class AgregarPresupuestoComponent {

    monto!:    number;
    formError: boolean = false;

    constructor( 
        private titulo: Title,
        private _presupuestoService: PresupuestoService,
        private router: Router
    ) {
        titulo.setTitle('Agregar presupuesto');
    }

    guardarPresupuesto(): void {

        if ( isNumeroPositivo(this.monto) ) {

            this.formError = false;

            // Utilizar el servicio para almacenar el presupuesto
            this._presupuestoService.total    = this.monto;
            this._presupuestoService.restante = this.monto;

            this.router.navigate(['/gastos']);

        } else {

            this.formError = true;
        }    
    }
}
