import React, { useState, useEffect } from 'react'

 export const Categorias = () => {
    const [categoria,setCategoria] = useState("");

    useEffect(()=>{
        document.title = `Categoria  ${categoria}`;
    },[categoria])

    const handleClick = (categoria) =>{
        setCategoria(categoria);
    }


  return (
    <div>
        <h2>Categorias de Productos</h2>
        <button onClick={ ()=> handleClick('Futbol')}>Futbool</button>
        <button onClick={ ()=> handleClick('Animales')}>Animales</button>
        <button onClick={ ()=> handleClick('Anime')}>Anime</button>
        <button onClick={ ()=> handleClick('Hogar')}>Hogar</button>
    </div>
  )
}


