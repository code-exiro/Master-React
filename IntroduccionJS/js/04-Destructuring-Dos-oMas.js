// Objetos - Destructuring de dos o más objetos
// El destructuring permite extraer valores de objetos y asignarlos a variables de manera rápida y clara.

// Objeto 'producto'
const producto = {
    nombre: "Tablet",
    precio: 3000,
    disponible: false
};

// Objeto 'cliente'
const cliente = {
    nombre: "Juan",
    premiun: true,
    direccion: {
        calle: "Calle Mexico"
    }
};

// Destructuring de un solo objeto
// Extraemos la propiedad 'nombre' del objeto 'producto'
const { nombre } = producto;

// Destructuring de un objeto anidado
// Extraemos 'nombre' del objeto 'cliente' y renombramos la variable como 'nombreCliente'
// También extraemos 'calle' desde el objeto anidado 'direccion'
const { nombre: nombreCliente, direccion: { calle } } = cliente;

// Mostrar los valores extraídos
console.log(nombre);         // "Tablet"
console.log(nombreCliente);  // "Juan"
console.log(calle);          // "Calle Mexico"

// Nota:
// Al utilizar destructuring con objetos anidados, es importante asegurarse de que las propiedades existen.
// De lo contrario, obtendrás un error si intentas acceder a una propiedad que no está definida.
