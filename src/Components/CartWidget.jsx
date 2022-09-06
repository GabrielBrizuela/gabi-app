import React from "react";
import carrito from "../assets/img/carrito.png";

const CartWidget = ()=> {
    return (
        <div>
            <a href="/"> <li><img src={carrito}  alt="carrito"/></li> </a>
        </div>
    )
}

export default CartWidget;