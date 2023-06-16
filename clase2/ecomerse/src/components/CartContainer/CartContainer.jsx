import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { CartVacio } from "../CarritoVacio/CartVacio";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';
import './CartContainer.css';

export const CartContainer = () => {
  const { cartList, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);
  const [ordenId, guardarOrdenId] = useState(null);

  const [dataForm, setDataForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    confirmaEmail: ''
  });

  const generarCompra = (evt) => {
    evt.preventDefault();
    if (dataForm.email !== dataForm.confirmaEmail) {

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los correos electrónicos no coinciden. Por favor, verifique.',
      });
      return;
    }

    const order = {
      comprador: dataForm,
      items: cartList.map(({ nombre, id, precio, cantidad }) => ({ id, nombre, precio, cantidad })),
      total: precioTotal()
    };

    const dbFirestore = getFirestore();
    const orderCollection = collection(dbFirestore, 'ordenes');

    addDoc(orderCollection, order)
      .then((resp) => {
        guardarOrdenId(resp.id);
        Swal.fire({
          icon: "success",
          title: "Orden de compra",
          text: `El id de su compra es ${resp.id}`,
        });
        vaciarCarrito();
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <>
      {cartList.length === 0 ? (
        <CartVacio />
      ) : (
        <div>
          <h3 className="shipping-title">¡Felicidades, el envío es gratis! ✨🚚</h3>

          <div className="cart-items-container">
            {cartList.map(producto => (
              <div className="cart-item" key={producto.id}>
                <img className="cart-item-image" src={producto.img} alt="imagen" />
                <div className="cart-item-details">
                  <label className="cart-item-price">Precio: {producto.precio}</label>
                  <label className="cart-item-quantity">Cantidad: {producto.cantidad}</label>
                </div>
                <button onClick={() => eliminarProducto(producto.id)} className="cart-item-remove">Eliminar producto</button>
              </div>
            ))}
          </div>

          <button onClick={vaciarCarrito} className="empty-cart-btn">Vaciar carrito</button>
          <h3 className="total-price">Precio total de la compra: {precioTotal()}</h3>

          <form onSubmit={generarCompra}>
            <input
              type="text"
              name="nombre"
              required
              placeholder="Ingrese el nombre"
              onChange={handleOnChange}
              value={dataForm.nombre}
            />
            <input
              type="tel"
              name="telefono"
              required
              pattern="[0-9]{10}"
              placeholder="Ingrese el teléfono (sin 0 y sin 15)"
              onChange={handleOnChange}
              value={dataForm.telefono}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Ingrese el correo electrónico"
              onChange={handleOnChange}
              value={dataForm.email}
            />
            <input
              type="email"
              name="confirmaEmail"
              required
              placeholder="Repita el correo electrónico"
              onChange={handleOnChange}
              value={dataForm.confirmaEmail}
            />
            <button type="submit">Generar orden</button>
          </form>
        </div>
      )}
    </>
  );
};
