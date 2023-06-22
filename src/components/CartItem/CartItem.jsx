import "./CartItem.css"
import "../Cart/Cart"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = () => {

        const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    return (
        <div className="CartContainer">
            {cart.map((p) => (
            <div key={p.id}>
                <img src={p.img} alt="" />
                <h3>{p.name}</h3>
                <p>Cantidad:{p.quantity}</p>
              <p>Subtotal: ${(p.price * p.quantity).toFixed(2)}</p>
        </div>
            ))}
            <p>Precio total: ${totalPrice}</p>
        </div>
    );
}

export default CartItem