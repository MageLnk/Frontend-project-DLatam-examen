// Context 

import GeneralContext from "../../../Context/GeneralContext";
import { useContext } from "react";

// Components

import { useParams } from "react-router-dom";
import { Row, Col, InputNumber, Button } from "antd";

// Style

import "./style.css";



const ProductContent = () => {
  const { products, cart, setCart, quantity, setQuantity } = useContext(GeneralContext);
  const params = useParams();

  const buyProducts = (product) => {
    const productToAdd = { ...product, quantity };
    
    // Check if product already exists in cart
    const alreadyExists = cart.some((p) => p.id_product === productToAdd.id_product);
  
    if (alreadyExists) {
      alert("Este producto ya se encuentra en el carrito");
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
        <Row key={product.id_product} className="container container-p">
          <Col lg={12}>
            <img alt="image" src={product.img_link} className="products-image" />
          </Col>
          <Col lg={12}>
            <h3 className="product-title">{product.name_product}</h3>
            <div className="line"></div>
            <h4>Categoria : {product.category}</h4>

            <h4 className="product-price">{product.price}</h4>
            <p>Envíos calculados antes de finalizar el pago</p>
            <InputNumber size="large" min={1} max={100000} defaultValue={1} value={quantity} onChange={setQuantity}/>
            <Button className="black-red-button padding-button " block onClick={()=> buyProducts(product)}>
              Agregar al carrito
            </Button>
          </Col>
        </Row>
    ));


  return <Row gutter={16}>{products && mapingData(productFilter(products))}</Row>;
};

export default ProductContent;
