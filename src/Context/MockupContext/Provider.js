import { useEffect, useState } from "react";
// Context
import MockupContext from "./";
// Utilities
//import apiCall from "../../utilities/api/apiCall";

const MockupContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: "01",
      name: "White & Gray & Black – Gel Polish 7.3ml",
      img: "https://canni.cl/wp-content/uploads/2022/11/blanco-300x300.webp",
      alt: "Esmalte 01",
      price: "6800",
      category: "Esmalte",
      desc: "Prueba 01",
    },
    {
      id: "02",
      name: "Rose Red – Gel Polish 7.3ml",
      img: "https://canni.cl/wp-content/uploads/2022/11/rose-300x300.webp",
      alt: "Esmalte 02",
      price: "6500",
      category: "Esmalte",
      desc: "Prueba 02",
    },
    {
      id: "03",
      name: "Gold & Yellow – Gel Polish 7.3ml",
      img: "https://canni.cl/wp-content/uploads/2022/11/oro_amarillo-300x300.webp",
      alt: "Esmalte 03",
      price: "6800",
      category: "Esmalte",
      desc: "Prueba 03",
    },
    {
      id: "04",
      name: "Red – Gel Polish 7.3ml",
      img: "https://canni.cl/wp-content/uploads/2022/11/rojo-300x300.webp",
      alt: "Esmalte 04",
      price: "6500",
      category: "Esmalte",
      desc: "Prueba 04",
    },
  ]);
  /*   // Prueba 


  useEffect(() => {
    const fecthProductos = async () => {
        const resp = await fetch('../../Mockup/index.json') ;
        const data= await resp.json();
        console.log(data)
        setProductos(data);
    };

    fecthProductos();
}, [] );
 */

  //const [data, setData] = useState("");
  //const exampleUseApiCall = async (userId) => {
  //  try {
  //    const data = await apiCall({ url: `http://insertApiAddress` });
  //    // Insert setData(data)
  //  } catch (e) {
  //    alert("Un error ha ocurrido. Por favor actualice la página");
  //  }
  //};

  useEffect(() => {
    // Acá deberías hacer el set state de products
  }, []);

  return <MockupContext.Provider value={{ products }}>{children}</MockupContext.Provider>;
};

export default MockupContextProvider;
