/*Objetos  
Son entidades independientes que almacenan datos y entidades complejas, y se asocian con un nombre clave-valor (muy parecidos a los diccionarios en python)

Sintaxis:
const objeto = {
    clave1: valor1,
    clave2: valor2
};
*/

const producto = {
    nombre: "Tablet",
    precio: 3000,
    disponible: false
}

console.log(producto)
console.table(producto) // 'console.table' muy util para objetos
console.log(producto.nombre) // Tablet
console.log('-----------------------------------')

/*Destructuring 
es una forma rápida y elegante de extraer valores de objetos o arrays y asignarlos a variables*/

const { nombre, precio, marca } = producto //Si la variable no existe en el objeto, será undefined

console.log(nombre)  // Tablet
console.log(precio)  // 3000
console.log(marca)  // undefined

//Forma antigua 
const disponible = producto.disponible
console.log(disponible) // false

/*Object literal enhacement
es una forma de simplificar la creación de objetos cuando tienes variables o funciones que quieres asignar como propiedades del objeto*/

const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
    };

console.log(nuevoObjeto);  // Object { autenticado: true, usuario: "Juan" }

//Forma antigua
const nuevoObjetoAntiguo = {
    autenticado: autenticado,
    usuario: usuario
};

