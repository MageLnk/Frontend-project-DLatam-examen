import { useContext } from "react";
import GeneralContext from "../../../../Context/GeneralContext";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

const CartTotal = () => {

  const { cart } = useContext(GeneralContext);

  const totalPrice = cart.reduce((acc, product) => acc + (product.quantity * product.price), 0);

    return (
        <div>
            <Row>
                <Col lg={12}></Col>

                <Col lg={12} className="totalPrice container-p"> 
                    <table className="cart-table">
                        <thead className="cart-head">
                            <tr>
                                <th className="cart-image"><h2>Total del carrito</h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td  className="text-center container-p">
                                    <Row>
                                        <Col lg={12}><h3>Total a pagar:</h3></Col>
                                        <Col lg={12}><h3 className="red-color">${totalPrice}</h3></Col>
                                    </Row>
                                    <Link to={`/checkout/`}><Button className="black-red-button button-cart">Finalizar compra</Button></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </div>
    )
}

export default CartTotal;

