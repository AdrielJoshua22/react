import React from "react"
import "./Item.css"
import { Contador } from "../Contador/Contador"
import { Link } from "react-router-dom"


 export const Item = ({ id, nombre, precio, tamaño, img }) => {
    return (
        <div className="cardProducto">
            <img className="imgProducto" src={img} alt={nombre} />
            <h3>nombre: {nombre}</h3>
            <p>precio{precio}</p>
            <p>ID:{id}</p>
            <p>Tamaño:{tamaño}</p>
          <Contador stock={10} inicial={1}/>
        <Link to={`/detail/${id}`}>
            <button className="cardProducto" >Ver Detalles </button>
        </Link>


        </div>
    )
}


