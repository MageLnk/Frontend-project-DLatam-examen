import { useEffect, useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
import apiCall from "../../utilities/api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [products, setProducts] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);


  const getAllData = async (userId) => {
    try {
      const data = await apiCall({
        url: `https://project-castle-production.up.railway.app/products/temporal`,
      });

      //console.log(data)

      if (data) setProducts(data);
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        products,
        getAllData,
        cart,
        setCart,
        quantity,
        setQuantity

      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
