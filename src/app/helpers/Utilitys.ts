export const isNumeroPositivo = ( valor: number ) => {

    return typeof valor != 'undefined' && valor > 0;
}

export const isTextoValido = ( texto: string ) => {

    return typeof texto != 'undefined' && texto.trim().length > 0;
}

export const isNum1MayorNum2 = ( num1: number, num2: number ) => {

    return num1 > num2;
}

export const firstUpperCase = ( texto: string ) => {

    // Quitar Espacios por delante y por detras
    const cadena = texto.trim();   

    return cadena[0].toUpperCase() + cadena.slice(1).toLowerCase();
}