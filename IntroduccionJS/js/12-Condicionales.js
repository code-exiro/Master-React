// Condicionales y Comparadores en JavaScript
// Los condicionales permiten ejecutar diferentes bloques de código según se cumpla o no una condición.

// Declaración de variables
const disponible = 200;
const retirar = 200;

// Condicional if-else
// Verifica si el valor disponible es mayor o igual al monto a retirar
if (disponible >= retirar) {
    console.log(`Si puedes retirar ${retirar}`);
} else {
    console.log('Saldo insuficiente');
}

console.log('________________________________________________');

/*
Operadores de comparación:
>   Mayor que
<   Menor que
>=  Mayor o igual
<=  Menor o igual
==  Igual (comparador no estricto)
=== Igual estricto (compara valor y tipo)
.!== Diferente a
*/

// Ejemplo de comparación entre un número y un string
const numero1 = 20;
const numero2 = '20';

console.log(`${numero1} y '${numero2}' son iguales?`);

// Comparador no estricto (==)
// Compara solo el valor, no el tipo de dato
if (numero1 == numero2) {
    console.log('Si son iguales');
} else {
    console.log('No, no son iguales');
}

// Comparador estricto (===)
// Compara tanto el valor como el tipo de dato
console.log('Ejemplo con "==="');
if (numero1 === numero2) {
    console.log('Si son iguales');
} else {
    console.log('No, no son iguales');
}

/*
Diferencias entre == y ===:
- == (comparador no estricto) convierte los valores a un mismo tipo antes de compararlos.
- === (comparador estricto) compara tanto el valor como el tipo de dato, lo que es más seguro para evitar errores inesperados.
*/
