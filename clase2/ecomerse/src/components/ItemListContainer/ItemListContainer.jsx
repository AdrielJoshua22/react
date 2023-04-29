import { useState, useEffect } from 'react'

import { ItemList } from '../ItemList/ItemList';
import { getProductos } from '../../asyncmock';
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {categoria} = useParams()
  console.log(categoria)


  useEffect(() => {
    getProductos()
      .then(response => {
        if(categoria){
          setProductos(response.filter((prod)=> prod.categoria === categoria))
        }else{
          setProductos(response)
        }
      })
      
  }, [categoria])

  return (
    <div>
        <h2>Productos</h2>
    
    <ItemList productos={productos} />
    </div>
    

    
  )
}