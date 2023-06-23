import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem' 
import { Link, useNavigate } from 'react-router-dom'
import { createOrder } from '../../services/firebase'
import Checkout from '../Checkout/Checkout'

const Cart = () => {
    const {cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)
    const navigateTo = useNavigate();

    async function handleConfirm(){
        const order = {
            items: cart,
            buyer: {
                name: "Nacho",
                phone: 123,
                email: "nacho@gmail.com"
            },
            Date: new Date(),
            price: totalPrice()
        }

        const id = await createOrder(order);
        clearCart()
        navigateTo(`/order-confirmation/${id}`)
    }

    if(totalQuantity === 0){
        return(
            <div>
                <h3>No se encuentran items en el carrito</h3>
                <Link to='/' className='Option'></Link>
            </div>
        )
    }

    return (
        <div>
            <CartItem key={p.id} {...p}/> 
            <h3>Total: ${totalPrice()}</h3>
            <button onClick={() => clearCart()} className='Button OnAddButton'>Vaciar Carrito</button>
            <Link to='./Checkout' className='Option OnAddButton'>Finalizar compra</Link> 
        </div>
    )
}

export default Cart