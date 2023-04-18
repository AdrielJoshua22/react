
import { useState, useEffect } from "react"

export const Contador = ({ stock, inicial }) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState("white");

    useEffect (()=>{
        console.log("se ejecuto UseEffect");

        if(contador > 5){
            setColor("red")
        }else{
            setColor("white");
        }

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
            <button onClick={ agregarAlCarrito } style={{color: color}}>Agregar al Carrito</button>
        </div>
    )
}

