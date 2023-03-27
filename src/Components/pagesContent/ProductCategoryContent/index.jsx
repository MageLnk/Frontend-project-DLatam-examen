import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card} from "antd";
import { Link } from "react-router-dom";

import GeneralContext from "../../../Context/GeneralContext";
//

const ProductCategoryContent = () => {
  const { products } = useContext(GeneralContext);
  const params = useParams();

  const productFilter = (products) => {
    const filteredData = products.results.filter((element) => element.product.category === params.category);
    return filteredData;
  };

  console.log(params.category)

  const mapingData = (deployFilteredData) =>
    deployFilteredData.map(({ product }) => (
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

    if (!products || !products.results.length) {
      return (
              <div className="container container-p text-center">
                <h4>No hay productos en esta categoría</h4>
              </div>
              );
      }
  
    const filteredProducts = productFilter(products);
  
    if (!filteredProducts.length) {
      return (
        <div className="container container-p text-center">
          <h4>No hay productos en esta categoría</h4>
        </div>
        );
      }

  return <div className="container container-p text-center"><Row gutter={16}>{products && mapingData(productFilter(products))}</Row></div>;
};

export default ProductCategoryContent;
