import React, { memo } from "react"
import "./Item.css"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = memo(
  ({ id, nombre, precio, tamaño, img }) => {
    return (
      <Card style={{ width: '18rem' }}>
        <img className="imgProducto" src={img} alt={nombre} />
        <Card.Body>
          <Card.Title>NOMBRE: {nombre}</Card.Title>
          <Card.Text>
            Some quick example 
          </Card.Text>
           <Link to={`/detail/${id}`}>
           <Button variant="primary">Detalle</Button>
          </Link>
   
        </Card.Body>
      </Card>
    );
   }
   
)

