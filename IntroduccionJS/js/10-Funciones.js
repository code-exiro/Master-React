/*
Funciones en JavaScript
Las funciones son bloques de código reutilizables que realizan una tarea específica. Existen diferentes formas de declarar funciones en JavaScript.
*/

/*
Function Declaration (Declaración de Función)
Este tipo de función se declara con la palabra clave "function" y permite ser llamada antes de su declaración gracias al hoisting.
*/
function sumar(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}

// Llamadas a la función
sumar(10, 40);  // 50
sumar(100, 146);  // 246
sumar(10);  // 10

/*
Function Expression (Expresión de Función)
Este tipo de función se asigna a una variable. A diferencia de la Function Declaration, no se puede llamar antes de su declaración.
*/
const sumarExpresion = function(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
};

// Llamadas a la función
sumarExpresion(10, 20);  // 30
sumarExpresion(100, 200);  // 300
sumarExpresion(685);  // 685

/*
Arrow Functions (Funciones Flecha)
Introducidas en ES6, las Arrow Functions tienen una sintaxis más corta y no tienen su propio "this".
*/
const sumarFlecha = (numero1 = 0, numero2 = 0) => console.log(numero1 + numero2);

// Llamadas a la función
sumarFlecha(10, 28);  // 38
sumarFlecha(300, 3);  // 303
sumarFlecha(100);  // 100

/*
Funciones que Retornan Valores
Las funciones pueden devolver un valor utilizando la palabra clave "return".
*/
const sumarRetorno = function(numero1 = 0, numero2 = 0) {
    return numero1 + numero2;
};

const resultado1 = sumarRetorno(22, 8);
console.log(resultado1);  // 30

function sumarRetornoDecl(numero1 = 0, numero2 = 0) {
    return numero1 + numero2;
}

const resultado2 = sumarRetornoDecl(10, 20);
console.log(resultado2);  // 30

/*
Arrow Function que Retorna un Valor
Las Arrow Functions también pueden devolver un valor de manera implícita si la función tiene una sola línea de código.
*/
const sumarFlechaRetorno = (numero1 = 0, numero2 = 0) => numero1 + numero2;

const resultado3 = sumarFlechaRetorno(10, 20);
console.log(resultado3);  // 30
