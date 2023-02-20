import { Component } from '@angular/core';
import { firstUpperCase, isNum1MayorNum2, isNumeroPositivo, isTextoValido } from 'src/app/helpers/Utilitys';
import { FormErrors } from 'src/app/interfaces/FormErrors';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
    selector: 'app-agregar-gasto',
    templateUrl: './agregar-gasto.component.html',
    styleUrls: ['./agregar-gasto.component.css']
})
export class AgregarGastoComponent {

    nombreGasto!: string;
    monto!:       number;
    formErrors:  FormErrors = {
        messageNombreGasto: '',
        messageMonto: ''
    };

    constructor( private _presupuestoService: PresupuestoService ) {}

    validarFormulario(): void {

        const requerido: string = 'Campo obligatorio.'; 

        if ( !isTextoValido( this.nombreGasto ) ) {
            this.formErrors.messageNombreGasto = requerido;         
        }

        if ( !isNumeroPositivo( this.monto ) ) {
            this.formErrors.messageMonto = requerido;
            return;
        }       
        
        if ( isNum1MayorNum2( this.monto, this._presupuestoService.restante ) ) {
            this.formErrors.messageMonto = 'El monto no puede ser mayor al valor restante.';
            return;
        }
    }

    guardarGasto(): void {

        // Limpiar mensajes de error del formulario
        this.resetError();
        
        this.validarFormulario();        

        // Validar que el Formulario no tenga Errores
        if (this.formErrors.messageNombreGasto == '' && 
            this.formErrors.messageMonto == ''
        ) {           

            // Crear Objeto            
            const GASTO = {
                nombreGasto: firstUpperCase( this.nombreGasto ),
                monto:       this.monto
            }

            // Almacenar el gasto en el servicio presupuesto
            this._presupuestoService.almacenarGasto( GASTO );            

            // Limpiar el formulario
            this.resetForm();
        }
    }

    resetError(): void {

        this.formErrors = {
            messageNombreGasto: '',
            messageMonto: ''
        }        
    }

    resetForm(): void {

        this.nombreGasto = '';
        this.monto = 0;      
    }    
}
