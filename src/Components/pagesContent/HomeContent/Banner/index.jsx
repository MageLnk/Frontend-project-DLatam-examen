import { Row, Col } from "antd";
import logo from "../../../../assets/images/Logo_Canni.webp";

const Banner = () => {
  return (
    <Row className="banner-nosotros">
      <div className="container container-p">
        <Col sm={24} lg={12}>
          <img src={logo} className="logo-banner" alt="banner" />
          <p>
            Somos fabricantes profesionales de productos para uñas. Con productos de alta calidad. Representamos para el
            arte de la moda, la vitalidad eterna, la dedicación, la apariencia de moda y la calidad impecable en la
            industria de las uñas.
          </p>
        </Col>
        <Col sm={24} lg={12}></Col>
      </div>
    </Row>
  );
};

export default Banner;
