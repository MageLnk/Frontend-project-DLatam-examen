// Context 

import GeneralContext from "../../../Context/GeneralContext";
import { useContext } from "react";

// Components 

import {Row, Col, Button} from 'antd';
import { Link } from "react-router-dom";
import "./style.css"


const CheckoutContent = () => {

    const { cart } = useContext(GeneralContext);
    const totalPrice = cart.reduce((acc, product) => acc + (product.quantity * product.price), 0);
    
    return (
            <div className="container container-p">
                <div className="text-center">
                    <h1>Finalizar compra</h1>
                    <div className="line"></div> 
                </div>           
                    <Row>
                        <Col xs={24} sm={24} lg={14}>
                            <div> 
                                <form className="checkout-form padding-rigth">
                                    <h2>Detalles de facturación</h2>
                                    <div className="gray-line"></div>
                                    <Row>
                                        <Col lg={12} className="checkout-form">
                                            <p><b><label htmlFor='name'>Nombre:</label></b></p>
                                            <input className="input-checkout"
                                        />
                                        </Col>
                                        <Col lg={12} className="checkout-form">
                                            <p><b><label htmlFor='name'>Apellido:</label></b></p>
                                            <input className="input-checkout"
                                        />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} className="checkout-form">
                                            <p><b><label htmlFor='name'>Email:</label></b></p>
                                            <input className="input-checkout"
                                        />
                                        </Col>
                                        <Col lg={12} className="checkout-form">
                                            <p><b><label htmlFor='name'>Teléfono:</label></b></p>
                                            <input className="input-checkout"
                                        />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={24} className="checkout-form">
                                            <p><b><label htmlFor='name'>Dirección de la calle:</label></b></p>
                                            <input className="input-checkout-v2"
                                        />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={24} className="checkout-form">
                                            <p><b><label htmlFor='name'>Región:</label></b></p>
                                            <input className="input-checkout-v2"
                                        />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={24} className="checkout-form">
                                            <p><b><label htmlFor='name'>Comuna:</label></b></p>
                                            <input className="input-checkout-v2"
                                        />
                                        </Col>
                                    </Row>
                                    <h2 className="padding-top">Información adicional</h2>
                                    <div className="gray-line"></div>

                                        <Row>
                                            <Col lg={24}>
                                                <p><b><label htmlFor='name'>Notas del pedido (opcional)</label></b></p>
                                                <textarea></textarea>
                                            </Col>
                                        </Row>

                                </form>
                            </div>   
                        </Col>

                        <Col xs={24} sm={24} lg={10}>
                            <table className="cart-table">
                                    <thead className="cart-head">
                                        <tr>
                                            <th className="total-product">Nombre</th>
                                            <th className="total-price">Subtotal</th>
                                        </tr>
                                    </thead>


                                    {cart.map((product, index) => (
                                    <tbody key={product.id_product} >
                                        <tr>
                                            <td className="total">{product.name_product}</td>
                                            <td className="total">{product.quantity * product.price}</td>
                                        </tr>   
                                    </tbody>         
                                    ))}
                                    <thead>
                                    <tr>
                                            <td className="total"><h3>Total:</h3></td>
                                            <td className="total red-color"><h3>{totalPrice}</h3></td>
                                        </tr>  
                                        </thead>
                            </table> 

                            <div className="checkout-message">  
                                    <p>Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web y otros propósitos descritos en nuestra política de privacidad.</p>
                                    <Link to={`#`}><Button className="black-red-button button-cart">Realizar pedido</Button></Link>
                            </div>   
                        </Col>
                    </Row>
            </div>
    )
    
    }
    
export default CheckoutContent;


