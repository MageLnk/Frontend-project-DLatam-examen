import { useContext, useState } from "react";
import ItemCards from "../../layoutsContent/Cards/ItemCard";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";

import GeneralContext from "../../../Context/GeneralContext";




//    const filterCategory = arrayOfCategory.filter((products)=>{
//     return products === category.products
//     }) 



const ProductCategoryContent = () => {
  const { products } = useContext(GeneralContext);
  const [category, setCategory] = useState("");

  const filterProducts = (products) => {
    return products.results.filter((product) => {
      // aquí comparamos la categoría del producto con la categoría actual
      return product.product.category.toLowerCase() === category.toLowerCase();
    });
  };

  const mapingData = (products) =>
    filterProducts(products).map((product) => (
      <Col key={product.id_product} xs={12} lg={6}>
        <Card hoverable cover={<img alt="images" src={product.product.img_link} />}>
          <h3>{product.product.name_product}</h3>
          <p>{product.product.category}</p>
          <h1 className="red-color price">{product.product.price}</h1>
        </Card>
      </Col>
    ));

  return (
    <>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Esmalte">Esmalte</option>
        <option value="Esmalte">Esmaltes</option>
        <option value="Ropa">Ropa</option>
        <option value="Hogar">Hogar</option>
        // Agrega más opciones de categorías aquí
      </select>
      <Row gutter={16}>{products && mapingData(products)}</Row>
    </>
  );
};







export default ProductCategoryContent;
