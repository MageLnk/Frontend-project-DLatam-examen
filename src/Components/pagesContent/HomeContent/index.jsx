// Style
import "./style.css";
import CarouselHome from "./Carousel"
import Categorias from "./Categorias"
import Banner from "./Banner";
import Partners from "./Partners";
import CardProducts from "../../layoutsContent/CardProducts";

// App
const HomeContent = () => {
  return (
    <div>
      <CarouselHome />
      <CardProducts />
      <Banner />
      <Categorias />
      <Partners />
    </div> 
  )
};

export default HomeContent;
