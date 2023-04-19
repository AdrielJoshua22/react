import "./ItemDetail.css"

export const ItemDetail = ({ id, nombre, precio, tamaño, img, }) => {
    return (
        <div className="contenedorItem">
            <h2>nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>Tamaño: {tamaño} </h3>
            <h3>Id: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum recusandae maxime perferendis dolorem suscipit magnam illo vitae, sunt natus?</p>
            <img src= {img} alt= {nombre} />


        </div>
    )
}


