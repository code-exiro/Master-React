// Unir dos o más objetos en JavaScript
// Existen diferentes maneras de combinar el contenido de varios objetos en uno solo. Las formas más comunes son usando el spread operator y el método Object.assign().

// Objeto 'producto'
const producto = {
    nombre: "Tablet",
    precio: 3000,
    disponible: false
};

// Objeto 'cliente'
const cliente = {
    nombre: "Juan",
    premiun: true
};

/*
Spread Operator (Operador de propagación)
El spread operator (...) permite copiar todas las propiedades de un objeto dentro de otro de manera sencilla.
*/

// Crear un nuevo objeto uniendo 'producto' y 'cliente'
const nuevoObjeto = {
    ...producto,
    ...cliente
};

// Mostrar el nuevo objeto creado con el spread operator
console.log(nuevoObjeto);
/*
Nota: Si ambos objetos tienen una propiedad con el mismo nombre, el valor de la propiedad en el segundo objeto (en este caso 'cliente') sobrescribirá el valor del primero.
*/

/*
Método Object.assign()
Object.assign() es otra manera de combinar objetos. Este método toma un objeto destino y uno o más objetos fuente y copia las propiedades de los objetos fuente al objeto destino.
*/

// Crear un nuevo objeto usando Object.assign()
const nuevoObjeto2 = Object.assign({}, producto, cliente);

// Mostrar el nuevo objeto creado con Object.assign()
console.log(nuevoObjeto2);

/*
Diferencias entre Spread Operator y Object.assign():
- El spread operator es más moderno y tiene una sintaxis más limpia.
- Object.assign() es compatible con versiones anteriores de JavaScript.
- Ambos métodos sobrescriben propiedades si hay duplicados.
*/
