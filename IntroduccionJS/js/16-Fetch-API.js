// Uso de Fetch API con Promesas en JavaScript
// Fetch API es una herramienta nativa de JavaScript que permite realizar peticiones HTTP de manera sencilla.

// URL de ejemplo para realizar la petición
const url = 'https://jsonplaceholder.typicode.com/comments';

// Realizar una petición HTTP GET usando fetch
fetch(url) // fetch() requiere una URL como argumento
    .then((response) => {
        // Verificar si la respuesta fue exitosa (código de estado 200-299)
        if (response.ok) {
            // Convertir la respuesta a JSON para procesarla
            return response.json();
        } 
        // Lanzar un error si la respuesta no fue exitosa
        throw new Error('Hubo un error al realizar la petición.');
    })
    .then(data => {
        // Manejar los datos obtenidos del servidor
        console.log('Datos obtenidos:', data);
    })
    .catch(error => {
        // Manejar errores ocurridos durante la petición o procesamiento de datos
        console.log('Error:', error.message);
    });

/*
🔎 Explicación paso a paso:
1. **fetch(url)**:
- Realiza una solicitud HTTP a la URL especificada.
- Devuelve una promesa que se resuelve con un objeto Response.

2. **response.ok**:
- Verifica si el estado de la respuesta es exitoso (códigos 200-299).
- Si no es exitoso, se lanza un error con `throw`.

3. **response.json()**:
- Convierte el cuerpo de la respuesta a un objeto JSON.
- También devuelve una promesa que se resuelve con los datos procesados.

4. **.then(data)**:
- Maneja los datos JSON obtenidos y permite procesarlos, por ejemplo, mostrándolos en la consola.

5. **.catch(error)**:
- Captura errores ocurridos durante el fetch o el procesamiento de los datos.
- Muestra un mensaje de error en caso de que algo falle.

💡 Ventajas de Fetch API:
- Sintaxis simple y moderna.
- Soporta Promesas, lo que facilita el manejo asincrónico.
- Extensible: permite personalizar cabeceras, métodos HTTP, y más.

📌 Buenas prácticas:
- Manejar errores con bloques `catch`.
- Validar el estado de la respuesta con `response.ok`.
- Usar `async/await` para mayor legibilidad en lugar de `.then` (opcional).
*/
