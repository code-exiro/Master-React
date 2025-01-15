const disponible = 200
const retirar = 200

if(disponible >= retirar) {
    // Se cumple la condicion
    console.log(`Si puedes retirar ${disponible}`)
} else { 
    // No se cumple la condicion
    console.log('Saldo insuficiente')
}

console.log('________________________________________________')

/**
> Mayor que
< Menor que
>= Mayor o igual
<= Menor o igual
== igual
=== Igual estricto
!== Diferente a

Comparando con Comprador Estricto

== (comparador no estricto)
=== (comparador estricto)

*/

const numero1 = 20
const numero2 = '20'

console.log(`${numero1} y '${numero2}' son iguales?`)

if(numero1 == numero2) {
    console.log('Si son iguales')
} else {
    console.log('No, no son iguales')
}

console.log('Ejemplo con "==="')
if(numero1 === numero2) {
    console.log('Si son iguales')
} else {
    console.log('No, no son iguales')
}
