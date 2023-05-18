import { useCartContext } from "../../context/CartContext"


export const CartContainer = () => {
    const {cartList} = useCartContext()

    return (
        <div>
            {cartList.map(productos => (
                <div className="w-50">
                    <img className="w-25" src={productos.img} alt="imagen"/>
                    <label> Precio {productos.precio}  </label>
                    <button > X </button>
                </div>
            ))}
      
        </div>
    )
}