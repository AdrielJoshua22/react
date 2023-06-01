import { useContext } from "react"
import React from 'react'
/*  import { useCartContext } from "../../context/CartContext"  */

export const CartWidget = () => {
   const { cantidadTotal} = useContext()
  return (
    <>
    {cantidadTotal()}
    🛒
    </>
  )
}

