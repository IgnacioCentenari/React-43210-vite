import "./OrderId.css"
import { useParams } from "react-router-dom";

function OrderId() {
    const { orderId } = useParams();
        return (
            <div className="ReciboCompra">
                <h4>Gracias por tu compra!</h4>
                <p>Este es tu comprobante de compra: {orderId}</p>
            </div>
);
}

export default OrderId;