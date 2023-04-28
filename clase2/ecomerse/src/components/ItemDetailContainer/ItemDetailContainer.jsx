import { getUnProducto } from "../../asyncmock"
import { useState, useEffect } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);

    const {pid} = useParams()
    console.log(pid)

    useEffect(() => {
        getUnProducto(1)
            .then(res => setProductos(res))
    }, [])

    return (
        <div>
               <ItemDetail {...productos} />
        </div>
    )
}

