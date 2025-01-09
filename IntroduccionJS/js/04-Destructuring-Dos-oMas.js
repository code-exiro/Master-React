//Objetos - Destructuring de dos o mas objetos
const producto = {
    nombre : "Tablet",
    precio : 3000,
    disponible : false
}

const cliente = {
    nombre : "Juan",
    premiun : true,
    direccion : {
        calle : "Calle Mexico"
    }
}

const { nombre } = producto
const { nombre : nombreCliente, direccion : { calle }} = cliente

console.log(nombre)
console.log(nombreCliente)

console.log(calle)