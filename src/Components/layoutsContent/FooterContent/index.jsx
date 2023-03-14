// Style
import "./style.css";
// App

import {Row, Col, List, Typography} from 'antd';
import { CaretRightOutlined, FacebookFilled, InstagramFilled} from '@ant-design/icons';
import logoBlanco from "../../../assets/images/Logo_Canni_blanco-768x195.png" 

const productos = [
  'Esmaltes',
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

const interes = [
  'Home',
  'Envios y retiro en local',
  'Términos y condiciones',
]

const FooterContent = () => {
  return (
  <div className="footer white-color background-grey">
    <Row className="container">
      <Col sm={24} md={12} lg={6} className="column">
        <img src={logoBlanco} class="logo"/>
        <h4>Ubicación</h4>
        <p>Santiago Centro – Direccion de Bodega para Retiros será enviada por Whatsapp una vez realizada la compra.</p>
      </Col>
      <Col sm={24} md={12} lg={6} className="column">
        <h4>Productos</h4>
          <List 
            dataSource={productos}
            renderItem={(item) => (
              <List.Item>
                <Typography className="white-color"><CaretRightOutlined />{item}</Typography> 
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
        <h4>Link de interés</h4>
          <List 
                dataSource={interes}
                renderItem={(item) => (
                  <List.Item>
                    <Typography className="white-color"><CaretRightOutlined />{item}</Typography> 
                  </List.Item>
                )}
            />
      </Col>
    </Row>
  </div>
)
};

export default FooterContent;
