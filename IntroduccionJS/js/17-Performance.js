// Performance y Manejo de Múltiples Async/Await en JavaScript
// Este ejemplo compara dos enfoques para manejar múltiples peticiones asíncronas: 
// 1. Uso secuencial de `await` para cada llamada.
// 2. Uso simultáneo con `Promise.all` para mejorar el rendimiento.

const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/todos';
const url3 = 'https://jsonplaceholder.typicode.com/photos';

// Función con ejecución secuencial de peticiones
const consultarAPI = async () => {
    try {
        const inicio = performance.now(); // Inicia el cálculo del tiempo de ejecución

        // Primera llamada a la API
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // Segunda llamada a la API
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        console.log(data2);

        // Tercera llamada a la API
        const response3 = await fetch(url3);
        const data3 = await response3.json();
        console.log(data3);

        const fin = performance.now(); // Finaliza el cálculo del tiempo de ejecución
        console.log(`El tiempo total de la PRIMER función es: ${fin - inicio} ms`);
    } catch (error) {
        console.log('Error en la PRIMER función:', error.message);
    }
};

consultarAPI();

// Función con ejecución simultánea de peticiones usando Promise.all
const consultarAPI2 = async () => {
    try {
        const inicio = performance.now(); // Inicia el cálculo del tiempo de ejecución

        // Realiza todas las peticiones en paralelo
        const [response, response2, response3] = await Promise.all([
            fetch(url),
            fetch(url2),
            fetch(url3)
        ]);

        // Procesa las respuestas obtenidas en paralelo
        const [data, data2, data3] = await Promise.all([
            response.json(),
            response2.json(),
            response3.json()
        ]);

        console.log(data);
        console.log(data2);
        console.log(data3);

        const fin = performance.now(); // Finaliza el cálculo del tiempo de ejecución
        console.log(`El tiempo total de la SEGUNDA función es: ${fin - inicio} ms`);
    } catch (error) {
        console.log('Error en la SEGUNDA función:', error.message);
    }
};

consultarAPI2();

/*
🔎 Explicación paso a paso:

1. **Función `consultarAPI` (Ejecución Secuencial):**
- Realiza las peticiones de manera secuencial, esperando a que cada una se resuelva antes de comenzar la siguiente.
- Esto puede ser más lento porque las llamadas no ocurren al mismo tiempo.
- Ventaja: Es fácil de implementar y seguir.
- Desventaja: Aumenta el tiempo total cuando las peticiones no dependen entre sí.

2. **Función `consultarAPI2` (Ejecución Simultánea con `Promise.all`):**
- Realiza todas las peticiones en paralelo, lo que mejora significativamente el rendimiento.
- `Promise.all` espera a que todas las promesas se resuelvan o a que alguna falle.
- Se obtienen las respuestas más rápido, ya que no hay dependencia entre las llamadas.

3. **`performance.now()`:**
- Permite medir con precisión el tiempo de ejecución de una operación.

💡 **Comparación entre los dos métodos:**
- **Secuencial (`await` individual):** Adecuado si las peticiones dependen entre sí.
- **Simultáneo (`Promise.all`):** Ideal para peticiones independientes, reduciendo el tiempo total.

📌 Buenas prácticas:
- Validar siempre las respuestas con `response.ok` para manejar errores.
- Usar `Promise.all` con operaciones independientes para optimizar el rendimiento.
*/
