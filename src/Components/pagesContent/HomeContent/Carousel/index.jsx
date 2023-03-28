import { Row, Carousel, Button } from "antd";
import esmalteRosa from "../../../../assets/images/pink_01.png";
import esmalteVerde from "../../../../assets/images/green_01.png";

const CarouselHome = () => {
  return (
    <Row>
      <div className="slider">
        <Carousel autoplay>
          <div className="tabs slider01">
            <h1>
              <b className="rose-color">Pink</b> - Gel Polish 7.3ml <Button className="rose-button">Ver más</Button>
            </h1>
            <img src={esmalteRosa} className="esmaltes-banner" alt="carousel" />
          </div>
          <div className="tabs slider02">
            <h1>
              <b className="green-color">Green</b> - Gel Polish 7.3ml <Button className="green-button">Ver más</Button>
            </h1>
            <img src={esmalteVerde} className="esmaltes-banner" alt="carousel" />
          </div>
        </Carousel>
      </div>
    </Row>
  );
};

export default CarouselHome;
