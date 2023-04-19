import { getUnProducto } from "../../asyncmock"
import { useState, useEffect } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);

    useEffect(() => {
        getUnProducto(2)
            .then(res => setProductos(res))
    }, [])

    return (
        <div>
               <ItemDetail {...productos} />
        </div>
    )
}

