 import { useEffect, useState } from "react";
// Context
import GeneralContext from "./";
// Utilities
import apiCall from "../../utilities/api/apiCall";

const GeneralContextProvider = ({ children }) => {

/*   // Prueba 

  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState(null);

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


const [data, setData] = useState("");

  const exampleUseApiCall = async (userId) => {
    try {
      const data = await apiCall({ url: `http://insertApiAddress` });
      // Insert setData(data)
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  useEffect(() => {
    console.log("Una buen ejemplo para traer data desde una Api al momento de cargar la app, es usar el useEffect acá");
  }, []);

  return <GeneralContext.Provider value={{data}}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider; 