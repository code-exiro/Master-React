/*
Objetos en JavaScript
Los objetos son entidades independientes que almacenan datos y permiten representar información compleja mediante pares clave-valor. Son muy parecidos a los diccionarios en Python.

Sintaxis:
const objeto = {
    clave1: valor1,
    clave2: valor2
};
*/

// Declaración de un objeto llamado 'producto'
const producto = {
    nombre: "Tablet",
    precio: 3000,
    disponible: false
};

// Mostrar el objeto completo en la consola
console.log(producto);

// Mostrar el objeto en formato de tabla (muy útil para visualizar objetos grandes)
console.table(producto);

// Acceder a una propiedad específica del objeto utilizando la notación de punto
console.log(producto.nombre);  // "Tablet"

console.log('-----------------------------------');  // Separador visual

/*
Destructuring
El destructuring es una forma rápida y elegante de extraer valores de objetos o arrays y asignarlos a variables. Esto permite simplificar el acceso a los datos de un objeto.
*/

// Uso de destructuring para extraer valores del objeto 'producto'
const { nombre, precio, marca } = producto;  // 'marca' no existe en el objeto, será undefined

// Mostrar los valores extraídos
console.log(nombre);  // "Tablet"
console.log(precio);  // 3000
console.log(marca);   // undefined

// Forma antigua de acceder a una propiedad
const disponible = producto.disponible;
console.log(disponible);  // false

/*
Object Literal Enhancement
El Object Literal Enhancement es una técnica para simplificar la creación de objetos cuando tienes variables o funciones que deseas asignar como propiedades del objeto.
*/

// Declaración de variables
const autenticado = true;
const usuario = "Juan";

// Creación de un objeto usando Object Literal Enhancement
const nuevoObjeto = {
    autenticado,
    usuario
};

// Mostrar el objeto creado
console.log(nuevoObjeto);  // { autenticado: true, usuario: "Juan" }

// Forma antigua de crear el mismo objeto
const nuevoObjetoAntiguo = {
    autenticado: autenticado,
    usuario: usuario
};

// Mostrar el objeto creado con la forma antigua
console.log(nuevoObjetoAntiguo);  // { autenticado: true, usuario: "Juan" }
