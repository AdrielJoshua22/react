import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from "react"
import Button from 'react-bootstrap/Button';
import { CartVacio } from "../CarritoVacio/CartVacio";
import { CartContext } from "../../context/CartContext"
import Swal from 'sweetalert2';
import './CartContainer.css';






export const CartContainer = () => {
    const { cartList, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext)
    const [ordenId, guardarOrdenId] = useState(null)


    const [dataForm, setDataForm] = useState({
        nombre: '',
        telefono: '',
        email: ''

    })

    const generarCompra = (evt) => {
        evt.preventDefault()
        const order = {}
        order.comprador = dataForm
        order.items = cartList.map(({ nombre, id, precio, cantidad }) => ({ id, nombre, precio, cantidad }))
        order.total = precioTotal()

        const dbFirestore = getFirestore()
        const orderCollection = collection(dbFirestore, 'ordenes')

        addDoc(orderCollection, order)
            .then((resp) => {
                guardarOrdenId(resp.id);
                Swal.fire({
                    icon: "success",
                    title: "Orden de compra",
                    text: `El id de su compra es ${ordenId}`,
                })

            })
            .catch((err) => console.log(err))
    };

    const handleOnChange = (evt) => {
        console.log('nombre del input', evt.target.name)
        console.log('valor del input', evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })

    }
    console.log(dataForm)



/*     return (
        <>
            {cartList.length === 0 ? <CartVacio /> : (
                <div>
                    <h3 className="shipping-title">¡Felicidades, el envío es gratis! ✨🚚</h3>

                    <div className="cart-items-container">
                        {cartList.map(productos => (
                            <div className="cart-item" key={productos.id}>
                                <img className="cart-item-image" src={productos.img} alt="imagen" />
                                <div className="cart-item-details"></div>

                                
                                    <div className="cart-items-container">
                                        {cartList.map(productos => (
                                            <div className="cart-item" key={productos.id}>

                                                <div className="cart-items-container">
                                                    {cartList.map(productos => (
                                                        <div className="cart-item" key={productos.id}>
                                                            <img className="cart-item-image" src={productos.img} alt="imagen" />
                                                            <div className="cart-item-details">
                                                                <label className="cart-item-price">Precio: {productos.precio}</label>
                                                                <label className="cart-item-quantity">Cantidad: {productos.cantidad}</label>
                                                            </div>
                                                            <button onClick={() => eliminarProducto(productos.id)} className="cart-item-remove">Eliminar producto</button>
                                                        </div>
                                                    ))}
                                                </div>
                                                <button onClick={vaciarCarrito} className="empty-cart-btn">Vaciar carrito</button>
                                                <h3 className="total-price">Precio total de la compra: {precioTotal()}</h3>



                                                <form onSubmit={generarCompra}>
                                                    <input
                                                        type='text'
                                                        name='nombre'
                                                        onChange={handleOnChange}
                                                        value={dataForm.nombre}
                                                        placeholder="ingrese el nombre" />
                                                    <input
                                                        type='text'
                                                        name='telefono'
                                                        onChange={handleOnChange}
                                                        value={dataForm.telefono}
                                                        placeholder="ingrese el telefono" />
                                                    <input
                                                        type='text'
                                                        name='email'
                                                        onChange={handleOnChange}
                                                        value={dataForm.email}
                                                        placeholder="ingrese el email" />
                                                    <button className="btn btn-outline-danger">generar orden</button>
                                                </form>
                                            </div>

                                        )

            }
                                    </>
                                    )
}

 */

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
              onChange={handleOnChange}
              value={dataForm.nombre}
              placeholder="Ingrese el nombre"
            />
            <input
              type="text"
              name="telefono"
              onChange={handleOnChange}
              value={dataForm.telefono}
              placeholder="Ingrese el teléfono"
            />
            <input
              type="text"
              name="email"
              onChange={handleOnChange}
              value={dataForm.email}
              placeholder="Ingrese el email"
            />
            <button className="btn btn-outline-danger" type="submit">Generar orden</button>
          </form>
        </div>
      )}
    </>
  );
}  