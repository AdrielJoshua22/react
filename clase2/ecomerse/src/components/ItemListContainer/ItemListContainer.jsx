import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList';
/* import { getProductos } from '../../asyncmock'; */
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where  } from 'firebase/firestore'

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({}); 
  const [isLoading, setIsLoading] = useState(true)
  const { categoria } = useParams()


  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')

    if (!categoria) {
      getDocs(queryCollection)
        .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    } else {
      const queryCollectionFiltered = query(
        queryCollection, 
        where('categoria','==', categoria),
        
    )
      getDocs(queryCollectionFiltered)
        .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))


    }
 

}, [categoria])

return (

  isLoading ?

    <Loading />
    :
    <ItemList productos={productos} />





)
}