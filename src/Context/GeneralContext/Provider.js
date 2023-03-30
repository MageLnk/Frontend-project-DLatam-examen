import { useEffect, useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
import apiCall from "../../utilities/api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [products, setProducts] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [accessToken, setAccessToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Agregar variable de estado


  const getAllData = async (userId) => {
    try {
      const data = await apiCall({
        url: `https://project-castle-production.up.railway.app/products/temporal`,
      });

      if (data) setProducts(data);
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };
  
  useEffect(() => {
    
    getAllData();

    const storedAccessToken = localStorage.getItem('accessToken');

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
      setIsAuthenticated(true); // Establecer isAuthenticated en true si existe accessToken
    };

  }, []);


  const handleLogin = (token) => {
    setAccessToken(token);
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true); // Establecer isAuthenticated en true después de iniciar sesión
  };

 
  const handleLogout = () => {
    setAccessToken(null);
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false); // Establecer isAuthenticated en false después de cerrar sesión
  };

  return (
    <GeneralContext.Provider
      value={{
        products,
        getAllData,
        cart,
        setCart,
        quantity,
        setQuantity, 
        accessToken, 
        handleLogin,
        handleLogout,
        isAuthenticated
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
