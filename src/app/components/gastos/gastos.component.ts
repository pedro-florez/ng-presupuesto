import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
    selector: 'app-gastos',
    templateUrl: './gastos.component.html',
    styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

    constructor( 
        private title: Title,
        private _presupuestoService: PresupuestoService,
        private router: Router
    ) {        
        title.setTitle('Gastos');
    }

    ngOnInit(): void {

        // Validar que Exista Presupuesto
        if ( this._presupuestoService.total === 0 ) {

            // Redireccionar
            this.router.navigate(['/agregar-presupuesto']);
        }
    }       

}
