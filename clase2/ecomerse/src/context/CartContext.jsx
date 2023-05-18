import { createContext, useState, useContext } from "react"


 const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children})=> {

    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct)=>{

        setCartList([
            ...cartList,
            newProduct
        ])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>

          
            {children}

        </CartContext.Provider>
    )
}