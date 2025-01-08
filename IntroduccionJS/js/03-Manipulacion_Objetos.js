//Manipulacion de objetos
const producto = {
    nombre: "Tablet",
    precio: 3000,
    disponible: false
}

/*Lo vuelve inmutable
Object.freeze(producto)*/

/*Solo me permitiria modificar las propiedades existentes
Object.seal(producto)*/

//Reescribir un valor 
producto.disponible = true

//Sino existe, lo va añadir
producto.imagen = 'imagen.jpg'

//Eliminar propiedad
delete producto.precio

console.log(producto)