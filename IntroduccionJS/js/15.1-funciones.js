export function sumar(n1, n2) {
    return n1 + n2
}

export function restar(n1, n2) {
    return n1 - n2
}

export default function ejemploDefault(n1, n2) {
    return n1 - n2
}

export const multiplicar = (n1, n2) =>  n1 * n2

export const division = (n1, n2)  => n1 / n2

/*
igual se puede exportar de esta forma 
export {
    sumar,
    restar
}
*/

// Export Default en Modules de esta exportacion solo puede haber una por archivo, solo se agrega un "default" despues del export 
// export default function en caso de ser una arrow function la declaramos como una normal sin el export y abajo de esta o al final agregamos el export default y el nombre de la arrow function
