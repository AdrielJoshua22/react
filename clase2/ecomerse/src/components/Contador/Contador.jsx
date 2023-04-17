
import { useState, useEffect } from "react"

export const Contador = ({ stock, inicial }) => {
    const [contador, setContador] = useState(inicial);

    useEffect (()=>{
        console.log("se ejecuto UseEffect");
    },[contador]);

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }
    const agregarAlCarrito = () => {
            console.log(`Agregado ${contador} items`)
        }

    return (
        <div>
            <h2>Contador</h2>
            <button onClick={disminuirContador}>-</button>
            <strong>{contador}</strong>
            <button onClick={aumentarContador}>+</button>
            <button onClick={ agregarAlCarrito }>Agregar al Carrito</button>
        </div>
    )
}

