import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css"
import { useContext, useState} from "react";
import { createOrder } from "../../services/firebase";

const Checkout = () => {
    const { cart, clearCart, totalPrice } = useContext(CartContext)
    const navigateTo = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')

    const OnSubmit = async (e) => {
        e.preventDefault()

    const order = {
        items: cart,
        buyer: {
        name: "Ignacio",
        email: "Ignaciocentenari@gmail.com",
        address: "12345",
        city: "12345",
        postalCode: "12345",
        },
        date: new Date(),
        price: totalPrice()
    };

    const id = await createOrder(order)
    navigateTo(`/OrderId/${id}`)

        setName('')
        setEmail('')
        setCity('')
        setPostalCode('')

    
    clearCart()
    };

    return (
        <form onSubmit = {OnSubmit}>
            <h1>Ingresa tus datos para realizar la compra</h1>
            <div >
                <label >Nombre y Apellido</label>
                <input
                    placeholder="Nombre Completo"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Correo Electronico</label>
                <input
                    placeholder="GolfLeFleur@gmail.com"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Ciudad</label>
                <input
                    placeholder="Buenos Aires"
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Codigo Postal</label>
                <input
                    placeholder="64606"
                    type="text"
                    id="Codigo Postal"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                />
            </div>
            <button>Crear orden</button>
        </form>
    )
}

export default Checkout

