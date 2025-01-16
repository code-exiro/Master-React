// Uso de Módulos en JavaScript (ECMAScript Modules)
// En HTML, el atributo "type=module" indica que estamos utilizando módulos de JavaScript.
// Ejemplo en el archivo HTML:
// <script src="js/15-ECMAScript.js" type="module"></script>

// Importación de funciones y valores desde otro archivo
// Podemos asignar un alias a las funciones o valores importados para evitar conflictos de nombres.
import nombreX, { sumar as funcionSumar, restar, multiplicar, division } from './15.1-funciones.js';

// Uso de las funciones importadas
const resultado1 = funcionSumar(20, 10);
const resultado2 = restar(20, 10);
const resultado2_1 = nombreX(20, 10);
const resultado3 = multiplicar(20, 10);
const resultado4 = division(20, 10);

// Mostrar resultados en la consola
console.log(resultado1);  // 30
console.log(resultado2);  // 10
console.log(resultado2_1); // 10
console.log(resultado3);  // 200
console.log(resultado4);  // 2

/*
Notas sobre importación y exportación:
- Podemos usar "alias" para evitar conflictos de nombres en las importaciones (ejemplo: sumar como funcionSumar).
- "Export default" permite exportar un valor o función por defecto en un archivo, y al importarlo podemos darle el nombre que queramos.
*/
