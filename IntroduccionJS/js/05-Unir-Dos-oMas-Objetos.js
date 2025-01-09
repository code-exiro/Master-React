//Unir 2 o mas objetos
const producto = {
    nombre : "Tablet",
    precio : 3000,
    disponible : false
}

const cliente = {
    nombre : "Juan",
    premiun : true,
}

/*
const carrito = {
    cantidad : 1,
    ...producto     //Con los 3 puntos coloco el contenido del otro objeto dentro del objeto (spread operator)
}
*/

const nuevoObjeto = {
    ...producto ,
    ...cliente 

}

//Object.assing()
const nuevoObjeto2 = Object.assign(producto, cliente)

console.log(nuevoObjeto)
console.log(nuevoObjeto2)
