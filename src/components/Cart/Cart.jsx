import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
/* import CartItem from '../CartItem/CartItem' */
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No se encuentran items en el carrito</h1>
                <Link to='/' className='Option'></Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Vaciar Carrito</button>
            <Link to='/checkout' className='Option'><Checkout></Checkout></Link>
        </div>
    )
}

export default Cart