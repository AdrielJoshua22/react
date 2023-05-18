import { useState, useEffect } from 'react'

import { ItemList } from '../ItemList/ItemList';
import { getProductos } from '../../asyncmock';
import {  useParams } from 'react-router-dom';
/* import {doc, getDoc,getFirestore} from 'firebase'; */

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {categoria} = useParams()
  console.log(categoria)


/* useEffect(()=>{
const dbFirestore = getFirestore()
const queryDoc = doc(dbFirestore,'productos', '77TCndNco4xO4QKw0wob')

getDoc(queryDoc)
.them(resp =>({id: resp.id, ...resp.data()}))
},[])


 */






  useEffect(() => {
    getProductos()
      .then(response => {
        if(categoria){
          setProductos(response.filter((prod)=> prod.categoria === categoria))
        }else{
          setProductos(response)
          
        }
      })
      .finally(()=> setIsLoading(false))
      
  }, [categoria])

  return (
    
    isLoading ?

        <h2>cargando</h2>
    :
    <ItemList productos={productos} />
   
    
    

    
  )
}