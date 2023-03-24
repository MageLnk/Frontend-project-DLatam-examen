// Context
import GeneralContext from "../../../Context/GeneralContext";
// Style
import "./style.css";

// Components
import CarouselHome from "./Carousel"
import Categorias from "./Categorias"
import Banner from "./Banner";
import Partners from "./Partners";
import Cards from "../../layoutsContent/Cards";
import { useContext } from "react";


// App
const HomeContent = () => {
  const { products } = useContext(GeneralContext); 
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
