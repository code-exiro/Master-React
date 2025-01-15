// Métodos de Arrays en JavaScript
// Los métodos de arrays permiten manipular y trabajar con los datos almacenados en un array de diferentes maneras.

// Declaración de arrays de ejemplo
const tecnologias = ['HTML', 'CSS', 'JS', 'React.js', 'Node.js'];
const numeros = [10, 20, 34];

/*
Filter
El método filter() crea un nuevo array con los elementos que cumplen una condición específica.
No modifica el array original.
*/
const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML');
console.log(nuevoArray);  // ['CSS', 'JS', 'React.js', 'Node.js']

const numerosFiltrados = numeros.filter((numero) => numero > 15);
console.log(numerosFiltrados);  // [20, 34]

/*
Includes
El método includes() verifica si un elemento específico existe en el array.
Devuelve true o false.
*/
const incluyeCSS = tecnologias.includes('CSS');
console.log(incluyeCSS);  // true

/*
Some
El método some() verifica si al menos un elemento del array cumple una condición.
Devuelve true o false.
*/
const algunNumeroMayor = numeros.some((numero) => numero > 15);
console.log(algunNumeroMayor);  // true

/*
Find
El método find() devuelve el primer elemento que cumple una condición.
Si ningún elemento cumple la condición, devuelve undefined.
*/
const primerNumeroMayor = numeros.find((numero) => numero > 20);
console.log(primerNumeroMayor);  // 34

/*
Every
El método every() verifica si todos los elementos del array cumplen una condición.
Devuelve true si todos cumplen la condición, de lo contrario devuelve false.
*/
const todosMayoresQueCinco = numeros.every((numero) => numero > 5);
console.log(todosMayoresQueCinco);  // true

/*
Reduce
El método reduce() ejecuta una función reductora sobre cada elemento del array, devolviendo un único valor acumulado.
*/
const sumaTotal = numeros.reduce((total, numero) => total + numero, 0);
console.log(sumaTotal);  // 64

/*
Resumen:
- filter() crea un nuevo array con los elementos que cumplen una condición.
- includes() verifica si un elemento existe en el array.
- some() verifica si al menos un elemento cumple una condición.
- find() devuelve el primer elemento que cumple una condición.
- every() verifica si todos los elementos cumplen una condición.
- reduce() acumula los valores del array en un único resultado.
*/
