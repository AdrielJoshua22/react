import { createContext, useState, useContext } from "react"


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) => {

        const item1 = cartList.findIndex(prod => newProduct.id === prod.id)

        if (item1 === -1) {
            setCartList([
                ...cartList,
                newProduct
            ])

        } else {
            cartList[item1].cantidad = newProduct.cantidad
            setCartList([...cartList])
        }
    }

    const precioTotal = () =>{
        cartList.reduce((total, objeProducto) => total = (objeProducto.cantidad * objeProducto.precio), 0)
    }
        

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            precioTotal
        }}>


            {children}

        </CartContext.Provider>
    )
}