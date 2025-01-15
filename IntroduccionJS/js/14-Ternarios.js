// Operadores Ternarios y Otros Operadores en JavaScript
// Los operadores ternarios y otros operadores avanzados permiten simplificar las estructuras condicionales y hacer que el código sea más legible.

// Operador Ternario
// El operador ternario permite evaluar una condición en una sola línea, con la sintaxis: condición ? expresión1 : expresión2
const auth = true;
const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

// Uso básico del operador ternario
auth ? console.log('Usuario autenticado') : console.log('No Autenticado, ir a Login');

console.log('---------------------------------------------------------');

// Anidación de operadores ternarios
saldo > pagar ?
    console.log('Si puedes pagar') :
    tarjeta ?
        console.log('Puedes pagar con tarjeta') :
        console.log('No, no puedes pagar');

console.log('---------------------------------------------------------');

// Uso combinado de operadores lógicos y ternarios
saldo > pagar || tarjeta ?
    console.log('Si puedes pagar') :
    console.log('No, no puedes pagar');

console.log('---------------------------------------------------------');

// Optional Chaining (?.)
// El operador de encadenamiento opcional permite acceder a propiedades anidadas sin generar un error si alguna de ellas es undefined o null
const alumno = {
    nombre: 'Juan',
    clase: 'Programación 1',
    aprobado: true,
    examenes: {
        examen1: 90
    }
};

console.log(alumno.apodo?.apodo1); // undefined
console.log(alumno.examenes?.examen1);  // 90
console.log('Después de ALUMNO');
console.log('---------------------------------------------------------');

// Nullish Coalescing Operator (??)
// Este operador devuelve el valor de la izquierda si no es null ni undefined. De lo contrario, devuelve el valor de la derecha.
const pagina = 10 ?? 1;
console.log(pagina);  // 10
console.log('---------------------------------------------------------');

// Evaluación de Corto Circuito
// La evaluación de corto circuito permite ejecutar código condicionalmente sin necesidad de un if
const autentificacion = true;
autentificacion && console.log('Usuario Autenticado');

/*
Resumen:
- El operador ternario simplifica las estructuras condicionales.
- El optional chaining (?.) permite evitar errores al acceder a propiedades anidadas.
- El nullish coalescing operator (??) asegura que se devuelvan valores por defecto cuando se encuentra null o undefined.
- La evaluación de corto circuito permite ejecutar código rápidamente si se cumple una condición.
*/
