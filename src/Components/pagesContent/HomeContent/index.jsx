// Style
import "./style.css";

// Components
import CarouselHome from "./Carousel"
import Categorias from "./Categorias"
import Banner from "./Banner";
import Partners from "./Partners";
import Cards from "../../layoutsContent/Cards";



// App
const HomeContent = () => {

  return (
    <div>
      <CarouselHome />
      <Cards/>
      <Banner />
      <Categorias />
      <Partners />
    </div> 
  )
};

export default HomeContent;
