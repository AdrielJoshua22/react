import { createContext, useState, useContext } from "react"

export const CartContext = createContext()
/* const CartContext = createContext([]) */

export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    // FUNCION AGREGAR A CARRITO > ES EJECUTADA EN CartContainer
    

    const addToCart=(item, cantidad) =>{
      console.log(item,cantidad)
      if(isInCart(item.id)){
        setCartList (cartList.map(productos =>{
          return productos.id === item.id ?{...productos,cantidad:productos.cantidad + cantidad} : productos
        }));
  
      }else{
        setCartList ([...cartList,{...item,cantidad}]);
      }
    }

    const isInCart = (id) =>
    cartList.find((productos) => productos.id === id) ? true : false;


 // FUNCION PRECIOTOTAL ES LA SUMA DE TODOS LOS PRODUCTOS DEL CARRITO TENIENDO EN CUENTA LAS CANTIDADES. > ES EJECUTADA EN CartContainer

    const precioTotal = () => {
        return cartList.reduce(
          (total, producto) => total + producto.precio * producto.cantidad,
          0
        );
      };
        
    // FUNCION PARA SUMAR LA CANTIDAD DE ITEMS EN EL CARRITO 
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
            cantidadTotal, 
              }}>


            {children}

        </CartContext.Provider>
    )
}