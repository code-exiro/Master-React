// Ternarios
const auth = true

const saldo = 1000
const pagar = 1200
const tarjeta = true

auth ? 
    console.log('Usuario autenticado') : 
    console.log('No Autenticado, ir a Login')

console.log('---------------------------------------------------------')


saldo > pagar ?
    console.log('Si puedes pagar'):
    tarjeta ?
        console.log('Puedes pagar con tarjeta'):
        console.log('No, no puedes pagar')

console.log('---------------------------------------------------------')

saldo > pagar || tarjeta ?
    console.log('Si puedes pagar') :
    console.log('no, no puedes pagar')

console.log('---------------------------------------------------------')

// Optional chaining (?)
const alumno = {
    nombre: 'Juan',
    clase: 'Programación 1',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1)
console.log('Después de ALUMNO')
console.log('---------------------------------------------------------')

// Nullish coalescing operator (??)
const pagina = 10 ?? 1
console.log(pagina)

// Evaluación de corto circuito
const autentificacion = true
autentificacion && console.log('Usuario Autenticado') 