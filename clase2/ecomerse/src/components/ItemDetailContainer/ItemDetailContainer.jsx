
import { useState, useEffect } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {  getDoc, getFirestore, doc,  } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [productos, setProducto] = useState([]);
  /* const [isLoading, setIsLoading] = useState(true)  */
    const { categoria } = useParams()
    const {pid} = useParams()
  

     useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'productos', pid )

        getDoc(queryDoc) 
           .then( resp => setProducto( { id: resp.id, ...resp.data() } ) )
            .catch(err => console.log(err))

     },[])

    


    return (
        <div>
               <ItemDetail {...productos} />
        </div>
    )
}










/*    const [productos, setProductos] = useState(null);


const {pid} = useParams()
console.log(pid)

useEffect(() => {
    getUnProducto(pid)
    .then(res => setProductos(res))
}, [])

*/

