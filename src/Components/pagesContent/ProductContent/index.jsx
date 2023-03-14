import { useState } from "react";
import {Row, Col, InputNumber, Button} from 'antd';
import './style.css'


const ProductContent = () => {


    const [products, setProducts] = useState([
        {
            "id":"01",
            "name":"White & Gray & Black – Gel Polish 7.3ml",
            "img":"https://canni.cl/wp-content/uploads/2022/11/naranja.webp",
            "alt": "Esmalte 01",
            "price":"6800",
            "category": "Esmalte",
            "desc": "Esmaltes 7.3ml, Color : 240 colores Disponibles, Volumen : 7.3ml (.25fl oz), Requerimiento: Uso Lampara UV/LED, Modo de Empleo: Aplicar Base y Top "
        }
    ])


    return (
        <div>
            {products.map((product) => {

              return (   
              <>
              <Row  className="container container-p">
                <Col lg={12}> 
                    <img alt={product.alt} src={product.img} className="products-image" /> 
                </Col> 
                <Col lg={12}>
                   
                    <h3 className="product-title">{product.name}</h3> 
                    <div className="line"></div>
                    <h4>Categoria : {product.category}</h4>
                    <h4 className="product-price">{product.price}</h4>
                    <p>Envíos calculados antes de finalizar el pago</p>
                    <InputNumber size="large" min={1} max={100000} defaultValue={3} />
                    <Button className="background-red white-color padding-button " block>Agregar al carrito</Button>
                </Col>
                </Row>
                <Row className="container container-p">
                    <Col>
                    
                        <h2>Descripción</h2>
                        <div className="line"></div>
                        <p>{product.desc}</p>

                    </Col>
                </Row>
            </>
            )      
            })}
        </div>
        )
    
    }
    
    export default ProductContent ;