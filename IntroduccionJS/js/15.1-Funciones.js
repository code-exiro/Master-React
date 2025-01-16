// Exportación de funciones y valores en JavaScript

// Exportación de funciones nombradas
export function sumar(n1, n2) {
    return n1 + n2;
}

export function restar(n1, n2) {
    return n1 - n2;
}

// Exportación por defecto
// Solo puede haber una exportación por defecto en un archivo
export default function ejemploDefault(n1, n2) {
    return n1 - n2;
}

// Exportación de funciones como constantes
export const multiplicar = (n1, n2) => n1 * n2;

export const division = (n1, n2) => n1 / n2;

/*
Otras formas de exportar:
Podemos agrupar múltiples exportaciones en un solo bloque.

export {
    sumar,
    restar
};
*/

/*
Notas sobre exportación:
- "Export default" es útil para exportar una función o valor principal por archivo.
- Las funciones exportadas pueden ser reutilizadas en otros archivos mediante "import".
*/
