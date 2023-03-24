import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, InputNumber, Button } from "antd";
import "./style.css";
import GeneralContext from "../../../Context/GeneralContext";

const ProductContent = () => {
  const { products } = useContext(GeneralContext);
  const params = useParams();

  const filteredProducts = filterProducts(products.results);

  const mapingData = (filteredProducts) =>
    filteredProducts.map((product) => (
      <>
        <Row className="container container-p">
          <Col lg={12}>
            <img
              alt="image"
              src={product.product.img_link}
              className="products-image"
            />
          </Col>
          <Col lg={12}>
            <h3 className="product-title">{product.product.name_product}</h3>
            <div className="line"></div>
            <h4>Categoria : {product.product.category}</h4>
            <h4 className="product-price">{product.product.price}</h4>
            <p>Envíos calculados antes de finalizar el pago</p>
            <InputNumber size="large" min={1} max={100000} defaultValue={3} />
              <Button className="background-red white-color padding-button " block>
                Agregar al carrito
              </Button>
          </Col>
        </Row>
      </>
    ));

  function filterProducts(arrayOfProducts) {
    arrayOfProducts.filter((result) => {

      return (result.id_product === params.id

        )  
    })
    
     
    
    }

     

  return <Row gutter={16}>{filteredProducts && mapingData(filteredProducts)}</Row>;
};

export default ProductContent;