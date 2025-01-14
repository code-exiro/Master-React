// Manipulación de objetos en JavaScript
// Los objetos en JavaScript son dinámicos, lo que significa que puedes agregar, modificar o eliminar propiedades después de que se han creado.

const producto = {
    nombre: "Tablet",
    precio: 3000,
    disponible: false
};

/*
Object.freeze(producto)
El método Object.freeze() impide que se puedan agregar, modificar o eliminar propiedades del objeto. Lo convierte en un objeto inmutable.
*/

// Ejemplo:
Object.freeze(producto);
// producto.disponible = true;  // Error: No se puede modificar una propiedad de un objeto congelado

/*
Object.seal(producto)
El método Object.seal() permite modificar las propiedades existentes del objeto, pero impide agregar nuevas propiedades o eliminar las existentes.
*/

// Ejemplo:
Object.seal(producto);
// producto.imagen = 'imagen.jpg';  // No se permitirá agregar nuevas propiedades
// producto.disponible = true;      // Sí se permite modificar las propiedades existentes

// Reescribir un valor existente
producto.disponible = true;

// Agregar una nueva propiedad
producto.imagen = 'imagen.jpg';

// Eliminar una propiedad
delete producto.precio;

// Mostrar el objeto modificado en la consola
console.log(producto);
