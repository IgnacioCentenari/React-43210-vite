import carrito from "./assets/carrito.svg"
import "./CartWidget.css"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


const CartWidget = () => {

    const { cart } = useCartContext();     
    
    const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0);

    return(
        <Link to='/cart' className="CartWidget" >
        <img src={carrito} alt="carrito de compras" className="carritoImg"/>
        <p className="CartNumber">{totalQuantity}</p>
        </Link>
    )
}

export default CartWidget