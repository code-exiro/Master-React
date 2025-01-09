// Template Strings y Concatenacion

const producto = "Tablet de 12 Pulgadas"
const precio = 4000
const marca = "Orange"

console.log("El producto es: " + producto) //Esto se puede tornar complicado cuando hay muchos elementos. Ejemplo:
console.log(producto + " $" + precio + " Dolares, marca: " + marca) //Forma larga

console.log(`El producto es: ${producto}`)
console.log(`${producto} $${precio} Dolares, marca: ${marca}`)