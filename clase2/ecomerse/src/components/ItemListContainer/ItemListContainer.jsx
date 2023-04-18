import {useState,useEffect} from 'react'

import { ItemList } from '../ItemList/ItemList';
import { getProductos } from '../../asyncmock';


 export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);


    useEffect(()=>{
        getProductos()
        .then(response => setProductos(response))
        .catch(error => console.error(error))
    },[])

  return (
    <div>
      <h2>Productos</h2>
      <ItemList productos={productos} />
     

    </div>
  )
}


