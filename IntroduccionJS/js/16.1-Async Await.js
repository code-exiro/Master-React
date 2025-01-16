// Uso de Fetch API con Async/Await en JavaScript
// Async/Await es una forma moderna y más legible de manejar operaciones asincrónicas en JavaScript.

// URL de ejemplo para realizar la petición
const url = 'https://jsonplaceholder.typicode.com/comments';

// Función para consultar la API utilizando Async/Await
const consultarAPI = async () => {
    try {
        // Realizar la petición HTTP con fetch
        const response = await fetch(url);

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error('Hubo un error al realizar la petición.');
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Manejar los datos obtenidos
        console.log('Datos obtenidos:', data);
    } catch (error) {
        // Manejar errores ocurridos durante la petición o procesamiento
        console.log('Error:', error.message);
    }
};

// Llamar a la función para realizar la consulta
consultarAPI();

/*
🔎 Explicación paso a paso:
1. **Declaración de una función asincrónica con async**:
- La palabra clave `async` se utiliza para declarar una función que contiene operaciones asincrónicas.
- Dentro de una función async, puedes usar `await` para pausar la ejecución hasta que una promesa se resuelva.

2. **fetch(url)**:
- Realiza la solicitud HTTP y devuelve una promesa que se resuelve con un objeto Response.

3. **await fetch(url)**:
- Pausa la ejecución de la función hasta que la promesa de `fetch` se resuelva.
- Esto permite trabajar con el resultado como si fuera un código sincrónico.

4. **response.ok**:
- Verifica si el estado de la respuesta es exitoso (códigos 200-299).
- Si no es exitoso, se lanza un error con `throw new Error()`.

5. **await response.json()**:
- Convierte el cuerpo de la respuesta a JSON.
- Esto también devuelve una promesa que se resuelve con los datos procesados.

6. **try...catch**:
- `try` contiene el código que podría generar errores.
- `catch` captura y maneja los errores lanzados dentro de `try`.

💡 Ventajas de Async/Await sobre Promesas:
- Código más legible y estructurado.
- Evita el anidamiento excesivo de `.then()`.
- Manejo de errores centralizado con `try...catch`.

📌 Buenas prácticas:
- Usar `try...catch` para manejar errores de forma segura.
- Validar el estado de la respuesta con `response.ok`.
- Evitar bloquear el hilo principal con operaciones sin await.
*/
