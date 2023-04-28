import { createContext } from "react"


export const CartContext = createContext([])


export const CartContexProvider = ({children})=>{
    return(
        <CartContext.Provider value={{}}>

          
            {children}

        </CartContext.Provider>
    )
}