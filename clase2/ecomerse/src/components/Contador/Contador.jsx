
import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';

export const Contador = ({ stock, inicial, onAdd }) => {
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
   
            <Button variant="secondary" onClick={disminuirContador}>-</Button>
            <strong>{contador}</strong>
            <Button variant="secondary" onClick={aumentarContador}>+</Button>
            <Button variant='primary'  onClick={() => {onAdd(contador);}}>Agregar al Carrito </Button>
        </div>
    )
}

