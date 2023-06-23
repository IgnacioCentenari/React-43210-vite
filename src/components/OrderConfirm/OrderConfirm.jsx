import "./OrderConfirm.css"
import { useParams } from "react-router-dom";

function OrderConfirm() {
    const { orderid } = useParams();
        return (
            <div>
                <h4>Gracias por tu compra!</h4>
            <p>Este es tu comprobante de compra: {orderid}</p>
            </div>
);
}

export default OrderConfirm;