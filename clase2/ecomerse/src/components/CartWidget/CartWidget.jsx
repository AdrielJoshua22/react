import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <>
      🛒
    {cantidadTotal()}
      
    </>
  );
};