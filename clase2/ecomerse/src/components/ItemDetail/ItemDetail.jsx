import { Contador } from "../Contador/Contador"
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { useContext, useState } from "react" 
import { CartContext } from "../../context/CartContext"




export const ItemDetail = ({ id, nombre, precio, tamaño, img, }) => {
    
    const [isCant , setIsCant] = useState(false)

    const {addToCart} = useContext(CartContext)
    const onAdd =(cantidad)=>{
    addToCart({ id, nombre, precio, tamaño, img, cantidad})
    setIsCant(true)
}
    return (
      <>
        <div className="contenedorItem">
            <h2>NOMBRE: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>Tamaño: {tamaño} </h3>
            <h3>Id: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum recusandae maxime perferendis dolorem suscipit magnam illo vitae, sunt natus?</p>
            <img  src= {img } />
           
           
   {
                        !isCant ? 
                        <Contador stock={10} inicial={1} onAdd={onAdd}/>
                        :
                        <>    
                         <Link to={'/cart'} className="btn btn-outline-danger">Terminar compra</Link>
                         <Link to={'/'} className="btn btn-outline-success">Seguir la compra</Link>
                        </>
                    }
 

        </div>
    </>
    )
}


