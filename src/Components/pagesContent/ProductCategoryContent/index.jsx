import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";

import MockupContext from "../../../Context/MockupContext";

const ProductCategoryContent = () => {

  const {products} = useContext(MockupContext);
  const {category} = useParams();
  console.log(category)


//    const filterCategory = arrayOfCategory.filter((products)=>{
//     return products === category.products
//     }) 


  return (
    <div>
         <div className="container container-p text-center">

            <Row gutter={16}>
            <h2 style={{width: '100%', textTransform:"uppercase"}}>{category}</h2>
            <div className="line"></div>
              {products.map((product) => {
                return (
                  <Col key={product.name} xs={12} lg={6}>
                    <Card hoverable cover={<img alt={product.alt} src={product.img} />} key={product.id}>
                      <h3>{product.name}</h3>
                      <h2>{product.category}</h2>
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
    </div>
  );
};

export default ProductCategoryContent;
