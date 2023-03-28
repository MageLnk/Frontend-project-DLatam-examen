import {  useContext } from "react";
import { InputNumber, Button } from "antd";
import GeneralContext from "../../../../Context/GeneralContext";
import "../style.css"

const CartElement = () => {
    const { cart, setCart } = useContext(GeneralContext);
  
    const handleQuantityChange = (value, index) => {
        const updatedCart = cart.map((product, i) => {
          if (i === index) {
            return { ...product, quantity: value };
          }
          return product;
        });
        setCart(updatedCart);
      };

      const handleDelete = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
      };
  

    return cart.map((product, index) => (

            <tbody key={product.id}>
                <tr>
                <td className="cart-image">
                    <img src={product.img_link} alt="" />
                </td>
                <td className="cart-product red-color">{product.name_product}</td>
                <td className="cart-price">{product.price}</td>
                <td className="cart-quantity">
                    <InputNumber
                    size="large"
                    min={1}
                    max={100000}
                    value={product.quantity}
                    onChange={(value) => handleQuantityChange(value, index)}
                    />
                </td>
                <td className="cart-subtotal">{product.quantity * product.price}</td>
                <td className="text-center">
                    <Button  className="black-red-button" type="danger" onClick={() => handleDelete(index)}>
                      Eliminar
                    </Button>
                </td>
                </tr>
            </tbody>
    ));
  };
  
  export default CartElement;



  
