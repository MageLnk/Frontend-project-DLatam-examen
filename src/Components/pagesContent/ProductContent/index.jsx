import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, InputNumber, Button } from "antd";
import "./style.css";
import MockupContext from "../../../Context/MockupContext";

const ProductContent = () => {
  const { products, cart, setCart } = useContext(MockupContext);
  const params = useParams();

 // Productos

  const filterProducts = (arrayOfProducts) => {
    return arrayOfProducts.filter((result) => result.id === params.id);
  };

  return (
    <div>
      {products &&
        filterProducts(products).map((product) => {
          return (
            <>
              <Row className="container container-p">
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
                  <Button className="background-red white-color padding-button " block>
                    Agregar al carrito
                  </Button>
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
          );
        })}
    </div>
  );
};

export default ProductContent;
