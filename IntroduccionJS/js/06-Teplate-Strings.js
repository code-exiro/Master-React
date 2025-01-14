// Template Strings y Concatenación en JavaScript
// Los Template Strings, introducidos en ES6, permiten crear cadenas de texto de forma más sencilla y legible utilizando comillas invertidas (``) y la sintaxis ${} para interpolar variables.

// Variables de ejemplo
const producto = "Tablet de 12 Pulgadas";
const precio = 4000;
const marca = "Orange";

// Concatenación tradicional
// La concatenación utilizando el operador + puede volverse complicada cuando se manejan muchas variables y elementos.
console.log("El producto es: " + producto);
console.log(producto + " $" + precio + " Dolares, marca: " + marca);

// Uso de Template Strings
// Con los Template Strings, la sintaxis es más limpia y permite incluir variables directamente dentro de las comillas invertidas.
console.log(`El producto es: ${producto}`);
console.log(`${producto} $${precio} Dolares, marca: ${marca}`);

/*
Ventajas de los Template Strings:
- Permiten una sintaxis más clara y legible.
- Soportan interpolación de variables y expresiones.
- Permiten saltos de línea dentro de las comillas invertidas sin necesidad de concatenar cadenas.
*/

// Ejemplo con salto de línea usando Template Strings
console.log(`Detalles del Producto:
Producto: ${producto}
Precio: $${precio}
Marca: ${marca}`);
