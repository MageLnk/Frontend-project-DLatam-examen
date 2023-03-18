import { useContext } from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";

import "./style.css";
// Context
import MockupContext from "../../../Context/MockupContext";

const CardProducts = () => {
  const { products } = useContext(MockupContext);

  return (
    <div className="container container-p text-center">
      <Row gutter={16}>
        {products.map((product) => {
          return (
            <Col key={product.name} xs={12} lg={6}>
              <Card hoverable cover={<img alt={product.alt} src={product.img} />} key={product.id}>
                <h3>{product.name}</h3>
                <h4 className="red-color price">{product.price}</h4>
                <Link to={`/product/${product.id}`}>
                  <Button className="black-red-button">Seleccionar opciones</Button>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardProducts;
