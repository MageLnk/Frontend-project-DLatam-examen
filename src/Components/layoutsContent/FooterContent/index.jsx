// Components

import {Row, Col, List, Typography} from 'antd';
import { CaretRightOutlined, FacebookFilled, InstagramFilled} from '@ant-design/icons';
import logoBlanco from "../../../assets/images/Logo_Canni_blanco-768x195.png" 
import webpay from "../../../assets/images/logo-web-pay.png" 

// Style

import "./style.css";

const productos = [
  'Esmalte',
  'Painting Gel',
  'Herramientas y Accesorios',
  'Nails Extension',
  'Aceite y suavizante',
  'Efectos y colecciones',
]

const contacto = [
  'contacto@canni.cl',
  '+56 9 2039 8923',
]

const FooterContent = () => {
    return (
        <div className="footer white-color background-grey">
          <Row className="container">
            <Col sm={24} md={12} lg={6} className="column">
              <img src={logoBlanco} className="logo"/>
              <h4>Ubicación</h4>
              <p>Santiago Centro – Direccion de Bodega para Retiros será enviada por Whatsapp una vez realizada la compra.</p>
            </Col>
            <Col sm={24} md={12} lg={6} className="column">
              <h4>Productos</h4>
                <List 
                  dataSource={productos}
                  renderItem={(item) => (
                    <List.Item>
                            <Typography.Link className="white-color" href={`/product-category/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                              <CaretRightOutlined />{item}
                            </Typography.Link>  
                    </List.Item>
                  )}
                />
            </Col>   
            <Col sm={24} md={12} lg={6} className="column">
              <h4>Contacto</h4>
                <List 
                    dataSource={contacto}
                    renderItem={(item) => (
                      <List.Item>
                        <Typography className="white-color"><CaretRightOutlined />{item}</Typography> 
                      </List.Item>
                    )}
                  />
                <h4>Redes Sociales</h4>
                <FacebookFilled /> <InstagramFilled />

            </Col>
            <Col sm={24} md={12} lg={6} className="column">
              <h4>Métodos de pago</h4>
              <img src={webpay}/>

            </Col>
          </Row>
        </div>
    )
};

export default FooterContent;
