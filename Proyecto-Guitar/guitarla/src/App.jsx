import { useState, useEffect} from 'react';
import  Header  from './components/Header';
import Guitar from './components/Guitar';

export default App

function App() {

    /* State
    const [auth, setAuth] = useState(false)
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])*/

    /* Effect
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        console.log('componente listo o escuchando por auth')
    }, [auth])

    useEffect(() => {
        if(auth) {
            console.log('autentificado')
        }
    }, [auth])

    setTimeout(() => {
        setAuth(true)
    }, 3000);*/

    return (
        <>

        <Header />

        <main className='container-xl mt-5'>
            <h2 className='text-center'>Nuestra Coleccion</h2>

            <div className='row mt-5'>
                <Guitar/>
                <Guitar/>
                <Guitar/>
                <Guitar/>
                <Guitar/>
                <Guitar/>
            </div>
        </main>

        <footer className='bg-dark mt-5 py-5'>
            <div className='container-xl'>
                <p className='text-white text-center fs-4 mt-4 m-md-0'>GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>

        </>
    )
}
