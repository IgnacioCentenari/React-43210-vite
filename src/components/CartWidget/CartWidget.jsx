import carrito from "./assets/carrito.svg"
import "./CartWidget.css"

const CartWidget = () => {
    return(
    <div>
        <img src={carrito} alt="carrito de compras" className="carritoImg"/>
        <span>0</span>
    </div>
    )
}

export default CartWidget