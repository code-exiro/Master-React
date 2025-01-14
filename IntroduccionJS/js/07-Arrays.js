/*
Arrays o Arreglos en JavaScript
Los arrays son estructuras de datos que permiten almacenar múltiples valores en una sola variable. Los elementos dentro de un array pueden ser de cualquier tipo de dato, incluidos números, strings, booleanos, objetos e incluso otros arrays.
*/

// Ejemplo de un array con diferentes tipos de datos
const tecnologias = [205, 340, 423, true, "React.js"];

// Mostrar el array en forma de tabla en la consola
console.table(tecnologias);

// Acceder a elementos específicos del array usando su índice
console.log(tecnologias[0]);  // 205
console.log(tecnologias[2]);  // 423

/*
Modificar elementos en un array existente
*/
const tecnologias2 = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];
tecnologias2[4] = 'Next.js';   // Reemplazar un elemento existente
tecnologias2[5] = 'Java';       // Agregar un nuevo elemento
tecnologias2[10] = 'C++';       // Agregar un elemento en un índice más alto

console.table(tecnologias2);

/*
Agregar elementos a un array usando push() y el spread operator
*/
const tecnologias3 = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];
tecnologias3.push('Nest.js');  // push() modifica el array original

const nuevoArreglo = [...tecnologias3, 'Nest.js'];  // El spread operator crea un nuevo array sin modificar el original

console.table(tecnologias3);
console.table(nuevoArreglo);

/*
Eliminar el primer elemento de un array usando shift()
*/
const tecnologias4 = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];
tecnologias4.shift();  // shift() elimina el primer elemento del array

console.table(tecnologias4);

/*
Filtrar elementos de un array usando filter()
El método filter() devuelve un nuevo array con los elementos que cumplen la condición de la función proporcionada.
*/
const tecnologias5 = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];
const tecnologiasFiltradas = tecnologias5.filter(function(tech) {
    if (tech !== 'HTML') {
        return tech;
    }
});

console.log(tecnologiasFiltradas);

/*
Modificar elementos de un array usando map()
El método map() crea un nuevo array modificando los elementos según la función proporcionada. No modifica el array original.
*/
const tecnologias6 = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];
const tecnologiasMapeadas = tecnologias6.map(function(tech) {
    if (tech === 'Node.js') {
        return 'Nest.js';
    } else {
        return tech;
    }
});

console.log(tecnologiasMapeadas);
