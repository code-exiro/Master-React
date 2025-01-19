/*JSX tiene algunas reglas como lo pueden ser:
-A diferencia de HTML que no es estricto en JSX si un elemento HTML tiene una etiqueta de apertura debera tener tambien una de cierre
-Las etiquetsa de solo apertura como <link> <img> <input> deberan finalizar con /> 
-Cada componente debe tener un return
-En este return debe haber maximo un solo elemento en el nivel maximo*/

export function Header() {

    const total = 100

    return (
        <>
            <p>Total a pagar: {total}</p>
            <p>Despues...</p>
        </>
    )
}


/* importando solo fragment
import { Fragment } from "react"

export function Header() {

    const total = 100

    return (
        <Fragment>
            <p>Total a pagar: {total}</p>
            <p>Despues</p>
        </Fragment>
    )
}
*/

/* importando todo React y obteniendo fragment
import React from "react"

export function Header() {

    const total = 100

    return (
        <React.Fragment>
            <p>Total a pagar: {total}</p>
            <p>Despues</p>
        </React.Fragment>
    )
}
*/