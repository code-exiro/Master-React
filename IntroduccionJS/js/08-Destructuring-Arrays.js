// Destructuring de Arrays en JavaScript
// El destructuring permite extraer elementos específicos de un array y asignarlos a variables de manera más sencilla y clara.

// Array de tecnologías
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];

// Acceso tradicional a un elemento específico del array
const react = tecnologias[3];
console.log(react);  // "React.js"

// Destructuring de Arrays
// Con el destructuring, podemos extraer elementos del array y asignarlos directamente a variables.
// En este caso, dejamos vacíos los primeros tres espacios para llegar al cuarto elemento del array.
const [ , , , reactjs] = tecnologias;

// Mostrar el elemento extraído usando destructuring
console.log(reactjs);  // "React.js"

/*
Ventajas del Destructuring en Arrays:
- Evita tener que acceder a los elementos usando índices.
- Hace el código más limpio y legible.
- Es útil cuando solo necesitas algunos elementos específicos del array.
*/
