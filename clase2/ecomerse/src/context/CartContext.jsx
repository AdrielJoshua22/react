import { createContext, useState, useContext } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    // FUNCION AGREGAR A CARRITO > ES EJECUTADA EN CartContainer
    
    const addToCart = (newProduct) => {

        const item1 = cartList.findIndex(productos => newProduct.id === productos.id)

        if (item1 === -1) {
            setCartList([
                ...cartList,
                newProduct
            ])

        } else {
            cartList[item1].precio = newProduct.precio
            setCartList([...cartList])
        }
    }


 // FUNCION PRECIOTOTAL ES LA SUMA DE TODOS LOS PRODUCTOS DEL CARRITO TENIENDO EN CUENTA LAS CANTIDADES. > ES EJECUTADA EN CartContainer

    const precioTotal = () => {
        return cartList.reduce(
          (total, producto) => total + producto.precio * producto.cantidad,
          0
        );
      };
        
    
     const cantidadTotal = () => {
        return cartList.reduce(
          (total, producto) => total + producto.cantidad,
          0
        );
      };

    // FUNCION VACIAR CARRITO > ES EJECUTADA EN CartContainer

    const vaciarCarrito = () =>{
        setCartList([])
    }

    //FUNCION ELIMINAR PRODUCTO > ES EJECUTADA EN CartContainer

    const eliminarProducto = (id)=>{
        setCartList(cartList.filter((productos)=>productos.id!==id))
   }
  

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            precioTotal,
            vaciarCarrito,
            eliminarProducto,
            cantidadTotal   
              }}>


            {children}

        </CartContext.Provider>
    )
}
