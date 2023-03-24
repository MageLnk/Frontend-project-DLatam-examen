import GeneralContext from "../../../../Context/GeneralContext";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import { useContext } from "react";

const ItemCards = () => {
  const { products } = useContext(GeneralContext);

  const mapingData = (products) =>
    products.results.map(({ product }) => (
      <Col key={product.id_product} xs={12} lg={6}>
        <Link to={`/product/${product.id_product}`}>
          <Card hoverable cover={<img alt="images" src={product.img_link} />}>
            <h3>{product.name_product}</h3>
            <p>{product.category}</p>
            <h1 className="red-color price">{product.price}</h1>
          </Card>
        </Link>
      </Col>
    ));
  return <Row gutter={16}>{products && mapingData(products)}</Row>;
};

export default ItemCards;
