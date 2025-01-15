// En la parte de index se ve de esta forma 
// <script src="js/15-ECMAScript.js" type="module"></script> agregamos el type module 

import nombreX, { sumar as funcionSumar, restar, multiplicar, division } from './15.1-funciones.js'

const resultado1 = funcionSumar(20, 10)
const resultado2 = restar(20, 10)
const resultado2_1 = nombreX(20, 10)
const resultado3 = multiplicar(20, 10)
const resultado4 = division(20, 10)

console.log(resultado1)
console.log(resultado2)
console.log(resultado2_1)
console.log(resultado3)
console.log(resultado4)

// En caso de importar algo con el mismo nombre, en ese caso vamos a necesitar poner un alias de esta manera
// import { sumar as funcionSumar } from './15.1-funciones.js'

// Export Default en Modules Cuando hacemos la importacion se agrega al inicio(se puede poner el nombre que queramos)
// import nombreX { sumar as funcionSumar } from './15.1-funciones.js'

