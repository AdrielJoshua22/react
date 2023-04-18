import React from "react"
import "./Item.css"
import { Contador } from "../Contador/Contador"


 export const Item = ({ id, nombre, precio, tamaño, img }) => {
    return (
        <div className="cardProducto">
            <img className="imgProducto" src={img} alt={nombre} />
            <h3>nombre: {nombre}</h3>
            <p>precio{precio}</p>
            <p>ID:{id}</p>
            <p>Tamaño:{tamaño}</p>
          <Contador/>
            <button>Ver Detalles </button>


        </div>
    )
}


