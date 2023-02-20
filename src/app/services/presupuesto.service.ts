import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PresupuestoService {
    
    total:    number = 0;
    restante: number = 0;

    // Variable observable
    private gastos$ = new Subject<any>();

    constructor() { }

    almacenarGasto( gasto: any ): void {

        // Agregar el objeto (gasto) al observable (gastos$)
        this.gastos$.next( gasto );
    }

    obtenerGasto(): Observable<any> {

        // Metodo para observar el objeto (gastos$)        
        return this.gastos$.asObservable();
    }

}
