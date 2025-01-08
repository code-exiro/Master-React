/*Variables. En JavaScript tenemos tres maneras principales de declarar variables:
    var (desuso)
    let (recomendado)
    const (recomendado para valores constantes)
*/

const separador = "------------------------------------------"

//⭐ let ⭐
let clientes = "Juan"
clientes = 30     // ✅ Reasignación permitida

let precio
precio = 1000
console.log(precio)
console.log(separador) // 🔻

//⭐ const ⭐
const PI = 3.1416;
//PI = 3.15;    ❌ Error: No puedes reasignar una constante

const gravedad = 9.8;
console.log(gravedad)

// Pero con objetos y arrays:
const persona = { nombre: "Emir" };
persona.nombre = "Otro";  // ✅ Permitido
console.log(separador) // 🔻

/*⭐ Tipos de datos ⭐
el operador typeof se utiliza para determinar el tipo de dato*/

//🔸 number (Números) Incluye enteros, decimales, y valores especiales como Infinity, -Infinity, y NaN (Not a Number).
let edad = 20;
let pi = 3.1416;
console.log(1 / 0);    // Infinity
console.log("Hola" * 2);  // NaN
console.log(pi,'/', typeof pi)  // 3.1416 / number

//🔸 string (Texto)
let nombre = "Juan";
let saludo = 'Hola';
let mensaje = `Hola, ${nombre}`;
console.log(mensaje,'/',typeof mensaje);  // Hola, Juan / string


//🔸 boolean (Lógicos)
let esEstudiante = true;
let esMayorDeEdad = false;
console.log(typeof esEstudiante)  // boolean

//🔸 null (Ausencia de Valor "vacío" o "sin valor")
let auto = null;   
console.log(auto)  // null

//🔸 undefined (No Definido)
let carro;
console.log(typeof carro);  // undefined

//🔸 symbol (Identificador Único)
let id = Symbol("id");
console.log(id,'/', typeof id);  // Symbol("id") / symbol

//🔸 bigint (Números Grandes)
let numeroGrande = 123456789123456789n;
console.log(numeroGrande, '/',typeof numeroGrande);  // 123456789123456789n / bigint

console.log(separador) // 🔻
