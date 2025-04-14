/*JSX tiene algunas reglas como lo pueden ser:
-A diferencia de HTML que no es estricto en JSX si un elemento HTML tiene una etiqueta de apertura debera tener tambien una de cierre
-Las etiquetsa de solo apertura como <link> <img> <input> deberan finalizar con /> 
-Cada componente debe tener un return
-En este return debe haber maximo un solo elemento en el nivel maximo*/

export default function Header({cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal }) {

    return (
        <header className="py-5 header">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-8 col-md-3">
                            <a href="index.html">
                                <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                            </a>
                        </div>
                        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div 
                                className="carrito"
                            >
                                <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                                <div id="carrito" className="bg-white p-3">

                                    {isEmpty ? (
                                        <p className="text-center">El carrito esta vacio</p>
                                    ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map( guitar => (
                                                    <tr key={guitar.id}>
                                                        <td>
                                                            <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                                        </td>
                                                        <td>{guitar.name}</td>
                                                        <td className="fw-bold">
                                                                ${guitar.price}
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => decreaseQuantity(guitar.id)}
                                                            >
                                                                -
                                                            </button>
                                                                {guitar.quantity}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => increaseQuantity(guitar.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeFromCart(guitar.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>                                    

                                        <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                                    </>
                                    )}

                                    <button 
                                        className="btn btn-dark w-100 mt-3 p-2"
                                        onClick={clearCart}
                                    >
                                        Vaciar Carrito
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
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