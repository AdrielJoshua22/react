import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Contador } from '../Contador/Contador';
import './ItemDetail.css';

 export const ItemDetail = ({ id, nombre, precio, tamaño, img }) => {
  const [isCant, setIsCant] = useState(false);
  const { addToCart } = useContext(CartContext);

/*   const onAdd = cantidad => {
    addToCart({ id, nombre, precio, tamaño, img, cantidad });
    setIsCant(true);
  };
 */

  const onAdd = (cantidad) => {
    addToCart({ id, nombre, precio, tamaño, img, cantidad },cantidad);
    setIsCant(true);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">NOMBRE: {nombre}</h2>
        <h3 className="card-price">Precio: {precio}</h3>
        <h3 className="card-size">Tamaño: {tamaño}</h3>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum recusandae maxime perferendis dolorem suscipit magnam illo vitae, sunt natus?
        </p>
        <img className="card-image" src={img} alt="imagen" />

        {!isCant ? (
          <Contador stock={10} inicial={1} onAdd={onAdd} />
        ) : (
          <div className="card-buttons">
            <Link to="/cart" className="btn btn-outline-danger">
              Terminar compra
            </Link>
            <Link to="/" className="btn btn-outline-success">
              Seguir la compra
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

