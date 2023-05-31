import { createContext, useState, useContext } from "react"


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

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

 
    const precioTotal = () => {
        return cartList.reduce(
          (total, producto) => total + producto.precio * producto.cantidad,
          0
        );
      };
        
    const vaciarCarrito = () =>{
        setCartList([])
    }

    const eliminarProducto = (id)=>{
        setCartList(cartList.filter((productos)=>productos.id!==id))
   }
  

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            precioTotal,
            vaciarCarrito,
            eliminarProducto     
              }}>


            {children}

        </CartContext.Provider>
    )
}
