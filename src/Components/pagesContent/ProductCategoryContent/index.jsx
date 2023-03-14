import { useState } from "react";
import {Row, Col, Card} from 'antd';


const ProductCategoryContent = () => {

    const [products, setProducts] = useState([
        {
            "id":"01",
            "name":"White & Gray & Black – Gel Polish 7.3ml",
            "img":"https://canni.cl/wp-content/uploads/2022/11/blanco-300x300.webp",
            "alt": "Esmalte 01",
            "price":"6800",
            "category": "Esmalte",
            "desc": "Prueba 01"
        },
        {
            "id":"02",
            "name":"Rose Red – Gel Polish 7.3ml",
            "img":"https://canni.cl/wp-content/uploads/2022/11/rose-300x300.webp",
            "alt": "Esmalte 02",
            "price":"6500",
            "category": "Esmalte",
            "desc": "Prueba 02"
        },
        {
            "id":"03",
            "name":"Gold & Yellow – Gel Polish 7.3ml",
            "img":"https://canni.cl/wp-content/uploads/2022/11/oro_amarillo-300x300.webp",
            "alt": "Esmalte 03",
            "price":"6800",
            "category": "Esmalte",
            "desc": "Prueba 03"
        },
        {
            "id":"04",
            "name":"Red – Gel Polish 7.3ml",
            "img":"https://canni.cl/wp-content/uploads/2022/11/rojo-300x300.webp",
            "alt": "Esmalte 04",
            "price":"6500",
            "category": "Esmalte",
            "desc": "Prueba 04"
        }
        
    ])

    return (
        <div className="container container-p text-center">

        <h1>Esmaltes</h1>
        <div className="line"></div> 
            <Row gutter={16}> 
            {products.map((product) => {
                
              return (   
              <Col xs={12} lg={6}>   
                <Card
                hoverable
                cover={<img alt={product.alt} src={product.img} />}
                key={product.id}
                >
                <h3>{product.name}</h3> 
                <h4 className="red-color price">{product.price}</h4>
                </Card>
            </Col> )      
            })}
            </Row>
        </div>
        )
    
    }
    
    export default ProductCategoryContent ;