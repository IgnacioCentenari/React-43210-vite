import carrito from "./assets/carrito.svg"
import "./CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' className="CartWidget" >
        <img src={carrito} alt="carrito de compras" className="carritoImg"/>
        {totalQuantity}
        </Link>
    )
}

export default CartWidget