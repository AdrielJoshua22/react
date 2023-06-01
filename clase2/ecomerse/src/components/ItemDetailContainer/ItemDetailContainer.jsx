
import { useState, useEffect } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc, } from 'firebase/firestore'
import { Loading } from '../Loading/Loading';

export const ItemDetailContainer = () => {
    const [productos, setProducto] = useState([]);
    const [isLoading , setIsLoading] = useState(true)
    const { categoria } = useParams()
    const { pid } = useParams()


    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'productos', pid)
       

        getDoc(queryDoc)
            .then(resp => setProducto({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))

    }, [categoria])




    return (
       
    isLoading?
            <Loading/>
            :
            <ItemDetail {...productos} />
       
    )
}


