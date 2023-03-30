import GeneralContext from "../../../Context/GeneralContext";
import { useContext } from "react";

// Components

import { useParams } from "react-router-dom";
import { Row, Col, InputNumber, Button, message } from "antd";

// Style

import "./style.css";

const ProductContent = () => {
  const { products, cart, setCart, quantity, setQuantity, isAuthenticated } = useContext(GeneralContext);
  const params = useParams();

  const buyProducts = (product) => {
    const productToAdd = { ...product, quantity };

    // Check if product already exists in cart
    const alreadyExists = cart.some((p) => p.id_product === productToAdd.id_product);

    if (alreadyExists) {
      message.error("Este producto ya se encuentra en el carrito");
    } else {
      setCart([...cart, productToAdd]);
      setQuantity(1);
    }
  };

  const productFilter = (products) => {
    const filteredData = products.results.filter((element) => element.product.id_product === params.id);
    return filteredData;
  };

  const mapingData = (deployFilteredData) =>
    deployFilteredData.map(({ product }) => (
      <div className="background-products" key={product.id_product}>
        <Row className="container container-p background-white">
          <Col lg={12} className="column">
            <img alt="products" src={product.img_link} className="products-image" />
          </Col>
          <Col lg={12} className="column">
            <h3 className="product-title">{product.name_product}</h3>
            <div className="gray-line"></div>
            <h4>Categoria : {product.category}</h4>

            <h4 className="product-price red-color">$ <b>{product.price}</b></h4>
            <p>Envíos calculados antes de finalizar el pago</p>
            <InputNumber size="large" min={1} max={100000} defaultValue={1} value={quantity} onChange={setQuantity} />

            {isAuthenticated ? (
              <Button className="black-red-button padding-button button-cart" block onClick={() => buyProducts(product)}>
                Agregar al carrito
              </Button>
            ) : (
              <Button className="black-red-button padding-button button-cart" block href="/login">
                Inicia sesión para agregar al carrito
              </Button>
            )}
          </Col>
          <Col lg={24}>
            <h3>Descripción</h3>
            <div className="gray-line"></div>
            <p>{product.description}</p>
          </Col>
        </Row>
      </div>
    ));

  return <Row>{products && mapingData(productFilter(products))}</Row>;
};

export default ProductContent;


