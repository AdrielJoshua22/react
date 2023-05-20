import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext , precioTotal } from "../../context/CartContext"
import { useState } from "react"


export const CartContainer = () => {
       const [ cartList  , precioTotal, /* vaciarCarrito,  */ ] = useCartContext()
       const [dataForm , setDataForm] = useState({
        nombre:'',
        telefono:'',
        email: ''
        
      })
    
    const generarCompra = (evt) => {
        evt.preventDefault()
        const order = {}
        order.comprador = dataForm /* { nombre: "", telefono: "", email: "" } */
        order.items = cartList.map(({ nombre, id, precio,cantidad }) => ({ id, nombre, precio,cantidad }))
         order.total = precioTotal()
        
        const dbFirestore = getFirestore()
        const orderCollection = collection(dbFirestore, 'ordenes')

        addDoc(orderCollection, order)
            .then(resp => console.log(resp))
    }

    const handleOnChange = (evt) => {
        console.log('nombre del input', evt.target.name)
        console.log('valor del input', evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })

    }
console.log(dataForm)

    return (
        <div>
            {cartList.map(productos => (
                <div className="w-50">
                    <img className="w-25" src={productos.img} alt="imagen" />
                    <label> Precio {productos.precio} -  Cantidad : {productos.cantidad} </label>
                    <button > X </button>
                </div>
            ))}
            <h3>Precio total de la compra :{precioTotal()} </h3>
            {/*  <button onClick={vaciarCarrito} className="btn- btn-outline-danger">vaciar Carrito</button>  */}
           {/* <button onClick={generarCompra} className="btn- btn-outline-danger">Generar Compra</button>  */}
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

