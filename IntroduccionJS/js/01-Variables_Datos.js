/*
Variables en JavaScript
En JavaScript tenemos tres maneras principales de declarar variables:
- var (desuso, evita usarlo)
- let (recomendado para variables que cambian)
- const (recomendado para valores constantes)
*/

const separador = "------------------------------------------";

// let
// Declaración de variable usando let
// let permite declarar variables cuyo valor puede cambiar a lo largo del programa.
let clientes = "Juan";   // Inicialización de variable
clientes = 30;            // Reasignación permitida

let precio;               // Declaración sin inicialización
precio = 1000;            // Asignación posterior
console.log(precio);      // 1000
console.log(separador);   // Separador 

// const
// Declaración de constantes con const
// const se utiliza para declarar valores que no deben cambiar durante la ejecución del programa.
const PI = 3.1416;        // Valor constante que no puede ser reasignado
// PI = 3.15;             // Error: No puedes reasignar una constante

const gravedad = 9.8;
console.log(gravedad);    // 9.8

// Constantes referenciales (objetos y arrays pueden ser mutables)
// Aunque const no permite reasignación, las propiedades internas de objetos o arrays sí pueden modificarse.
const persona = { nombre: "Emir" };
persona.nombre = "Otro";  // Permitido modificar una propiedad del objeto
console.log(persona.nombre);  // "Otro"

console.log(separador);   // Separador 

/*
Tipos de Datos
JavaScript ofrece distintos tipos de datos para representar información, como números, texto, valores booleanos, etc.
El operador typeof se utiliza para determinar el tipo de dato de una variable.
*/

// number (Números)
// Incluye enteros, decimales, Infinity, -Infinity y NaN.
let edad = 20;
let pi = 3.1416;
console.log(1 / 0);       // Infinity
console.log("Hola" * 2);  // NaN (Not a Number)
console.log(pi, '/', typeof pi);  // 3.1416 / number

// string (Texto)
// Los strings son cadenas de texto que pueden estar entre comillas simples, dobles o usando backticks para template literals.
let nombre = "Juan";
let saludo = 'Hola';
let mensaje = `Hola, ${nombre}`;  // Template literals
console.log(mensaje, '/', typeof mensaje);  // Hola, Juan / string

// boolean (Lógicos)
// Los valores booleanos representan verdadero (true) o falso (false).
let esEstudiante = true;
let esMayorDeEdad = false;
console.log(typeof esEstudiante);  // boolean

// null (Ausencia de Valor)
// null representa la ausencia de valor, es como decir que la variable está vacía.
let auto = null;   
console.log(auto);  // null

// undefined (No Definido)
// undefined significa que una variable ha sido declarada pero no tiene un valor asignado.
let carro;
console.log(typeof carro);  // undefined

// symbol (Identificador Único)
// Los símbolos son valores únicos que pueden usarse como identificadores de propiedades.
let id = Symbol("id");
console.log(id, '/', typeof id);  // Symbol("id") / symbol

// bigint (Números Grandes)
// bigint permite trabajar con números enteros más grandes que los soportados por el tipo number.
let numeroGrande = 123456789123456789n;
console.log(numeroGrande, '/', typeof numeroGrande);  // 123456789123456789n / bigint

console.log(separador);  // Separador 
