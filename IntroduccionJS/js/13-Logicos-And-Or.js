// Operadores Lógicos en JavaScript
// Los operadores lógicos permiten combinar múltiples condiciones dentro de una estructura condicional.

// Declaración de variables
const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

/**
 * Operadores Lógicos:
 * || (Logical OR) - Retorna true si al menos una de las condiciones es verdadera.
 * && (Logical AND) - Retorna true solo si todas las condiciones son verdaderas.
 */

console.log("AND");
// Uso del operador lógico AND (&&)
// La condición será verdadera solo si ambas condiciones se cumplen: saldo > pagar y tarjeta es true
if (saldo > pagar && tarjeta) {
    console.log('Puedes Pagar');
} else {
    console.log('No, no puedes pagar');
}

console.log("OR");
// Uso del operador lógico OR (||)
// La condición será verdadera si al menos una de las condiciones se cumple: saldo > pagar o tarjeta es true
if (saldo > pagar || tarjeta) {
    console.log('Puedes Pagar');
} else {
    console.log('No, no puedes pagar');
}

/*
Diferencias entre los operadores lógicos:
- || (OR) es útil cuando quieres permitir que una de varias condiciones sea suficiente para cumplir la lógica.
- && (AND) es útil cuando necesitas que todas las condiciones se cumplan para ejecutar el bloque de código.
*/
