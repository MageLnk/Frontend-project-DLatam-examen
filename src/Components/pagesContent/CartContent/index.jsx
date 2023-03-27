// Components

import CartElement from "./CartElements";
import CartTotal from "./CartTotal";
import GeneralContext from "../../../Context/GeneralContext";
import { useContext } from "react";

// Style

import "./style.css";

const CartContent = () => {

    const { cart } = useContext(GeneralContext);

    if (cart.length === 0) {
      return (
        <div className="container container-p text-center">
                <h4>Tu carrito está vacío.</h4>
        </div>
      )
    }

    return (
            <div className="container container-p text-center">
                <h1>Carrito de compras</h1>
                    <div className="line"></div> 
                        <table className="cart-table">
                            <thead className="cart-head">
                                <tr>
                                    <th className="cart-image"></th>
                                    <th className="cart-product">Producto</th>
                                    <th className="cart-price">Precio</th>
                                    <th className="cart-quantity">Cantidad</th>
                                    <th className="cart-subtotal">Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <CartElement/>
                        </table>
                        <CartTotal />
            </div>
        ) 
}

export default CartContent;