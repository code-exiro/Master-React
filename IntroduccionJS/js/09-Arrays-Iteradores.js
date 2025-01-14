// Bucles y métodos para iterar arrays en JavaScript
// Existen varias formas de recorrer los elementos de un array en JavaScript, cada una con sus propias características.

// Declaración de un array de tecnologías
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript'];

/*
Bucle for tradicional
Este es el método más básico para recorrer un array utilizando un índice.
*/
for (let i = 0; i < tecnologias.length; i++) {
    console.log(tecnologias[i]);
}

/*
forEach
El método forEach() permite ejecutar una función por cada elemento del array. No genera un nuevo array, solo recorre los elementos.
*/
tecnologias.forEach(function(elemento) {
    console.log(elemento);
});

/*
map
El método map() crea un nuevo array aplicando la función proporcionada a cada elemento del array original.
*/
const arrayMap = tecnologias.map(function(elemento) {
    return "Hola";
});

// Mostrar el resultado del método map
console.log(arrayMap);  // [ "Hola", "Hola", "Hola", "Hola", "Hola", "Hola", "Hola" ]

/*
for...of
El bucle for...of permite recorrer los elementos de un array de forma más legible y directa.
*/
for (let elemento of tecnologias) {
    console.log(elemento);
}

/*
Diferencias clave:
- forEach() no genera un nuevo array y devuelve undefined.
- map() genera un nuevo array basado en los resultados de la función aplicada.
- for...of es una alternativa más moderna y legible al bucle for tradicional.
*/
