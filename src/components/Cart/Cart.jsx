import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'



const Cart = () => {

    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

        return (
        <div>
            {cart.map((p) => 
            <div className='CartContainerFlex'>
                <div key={p.id} className="ItemCartContainer">
                <img src={p.img} alt="" />
                <h3>{p.name}</h3>
                <p>Cantidad:{p.quantity}</p>
                <p>Subtotal: ${(p.price * p.quantity).toFixed(2)}</p>
            </div>
            </div>
                )
            }
            {
                cart.length > 0 ?

                <div className='PagoFinal'>
                    <h3>Total: ${totalPrice()}</h3>
                    <button onClick={() => clearCart()} className='Button OnAddButton'>Vaciar Carrito</button>
                    <Link to='./Checkout' className='Option OnAddButton'>Finalizar compra</Link> 
                </div>
            
            :
            <div>
                <h3>No se encuentran items en el carrito</h3>
                <Link to='/' className='Option OnAddButton'>Productos</Link>
            </div>
            }
        </div>
    ); 
}

export default Cart

